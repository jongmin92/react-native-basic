import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    // route 후에 다시 로딩됐을 때
    // 이전 state(sotre에 저장되어 있는)와 새로 로딩한 state(employeeFetch 후) 데이터가
    // 일치(그대로)할 경우componentWillReceiveProps를 실행하지 않기 때문에
    // componentWillMount에도 추가 (createDataSource가 되지 않는다면 새로 추가된 아이템은
    // 리스트에 보이지 않고 기존의 아이템들만 보일것이다.)
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps 에는 재 랜더링될 해당 coponent의 변경될 다음 props가 있다.
    // this.props 에는 현재의 props가 들어있다.

    this.createDataSource(nextProps);
  }

  createDataSource({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee}/>;
  };

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  // object 로 받아온 값을 array로 변경해준다 object의 key값을 uid로 받는다.
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}; // { shift: 'Monday', name: 'S', id: '1j2j34'};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);

/*
 component의 생명주기에 대해서는 다음을 참고한다.
 참고 : <https://velopert.com/1130>

 LINE : 9
 componentWillMount는 react component의 생명주기로서 컴포넌트가 랜더링 되기전에 실행된다.
 보통 초기 data가 필요할 때 사용한다.
 참고 : 컴포넌트를 생성 할 때는 constructor -> componentWillMount
 -> render -> componentDidMount 순으로 진행된다.

 LINE : 20
 컴포넌트의 props가 변경될 때 실행된다.
 참고 : 컴포넌트의 prop이 변경될 때에는 componentWillReceiveProps -> shouldComponentUpdate
 -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행된다.

 LINE: 26~36, 40~44
 ListView는 각각의 row(줄)가 될 데이터(DataSource)와 레이아웃(renderRow)을 필요로 한다.
 자세한 설명은 다음을 참고한다.
 참고 : <https://facebook.github.io/react-native/docs/listview.html>

 LINE: 1, 51~53
 lodash는 객채와 배열에 유용한 유틸을 제공하는 라이브러리 이다.
 참고 : <https://facebook.github.io/react-native/docs/listview.html>
 */