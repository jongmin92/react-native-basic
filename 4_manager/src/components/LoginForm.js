import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {email, password, error, loading};
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

/*
 LINE : 3, 81
 connect : react-redux가 제공하는 함수이다. 컴포넌트가 애플리케이션 상태 업데이트를 받고 싶으면
 connect()를 이용해서 컴포넌트를 감싸주면 된다. 그러면 connect()가 셀렉터(mapStateToProps)를 이용해서
 필요한 모든 연결을 만들어준다.

 connect method -> 참고 : <https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options>
 connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 - mapStateToProps : 이를 지정할 경우 해당 컴포넌트가 redux의 store의 갱신을 구독한다.
 store가 업데이트될때마다 mapStateToProps가 호출된다.
 store에 저장된 state를 해당컴포넌트에서 props로 사용할 수 있게된다.
 - mapDispatchToProps : 전달받은 객체들은 모두 Action creator로 지정된다.
 해당 action들은 내부 props를 통해 호출 가능하다.

 LINE : 8~14
 Email과 Password Input의 Text가 변경될때마다 호출된다.
 변경된 Text들은 state를 지속적으로 변경해주어야 하는데 이를 위해서는 Action을 생성해야 한다.
 Action은 LINE 4에서 import 후 LINE 81에서 connect 함수를 통해 해당 component와 연결된다.

 LINE : 27
 onPress를 등록할때 bind를 하는 이유는 context 때문이다.
 자세한 내용은 다음을 참고한다.
 참고 : <http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/>

 - 간단한 정리
 대부분의 컴포넌트들은 mapStateToProps에 store에서 구독하고자(갱신될때 받고싶은) 하는
 state를 정의하고, mapDispatchToProps에 사용자와의 interaction을 통해 발생시킬 액션을
 정의하여 react-redux의 connect 함수를 통해 연결한다.
 연결된 스토더의 state와 action creator 들은 해당 컴포넌트의 props를 통해서 접근가능하게 된다.
 */
