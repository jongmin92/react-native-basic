import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: ''
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

/*
 Line: 1~7
 react : react를 사용
 redux : redux 프레임웍을 사용
 react-redux : react와 redux를 연동
 firebase: simple db test
 redux-thunk : 액션을 중첩해서 수행한다거나, 비동기 액션 처리를 가능하게 한다.

 Line: 10~20
 componentWillMount() : react 의 생명주기 중 하나, 컴포넌트가 DOM 위에 만들어지기 전에 실행된다.
 firebase 연동 : <https://firebase.google.com/> 프로젝트 생성 후 이메일 로그인 설정하면 config를 얻을 수 있다.

 Line: 23
 참고: <http://redux.js.org/docs/api/createStore.html>
 createStore는 다음의 매개변수를 받아 스토어를 생성한다.
 (1) rducer(현재 상태와 액션을 받아 다음상태를 반환함),
 (2) 스토어에 초기 state를 저장 가능,
 (3) enhancer로서 미들웨어와 같은것들을 추가 가능

 Line: 26~28
 <Provider> : reac-redux 컴포넌트인 <Provider> 에 store 를 설정해주면 그 하위 컴포넌트들에
 따로 parent-child 구조로 전달해주지 않아도 connect 될 때 store에 접근 할 수 있게 해준다.
 결국 컴포넌트 트리를 감싸는 컴포넌트이다. connect()를 이용해 루트 컴포넌트 밑의 컴포넌트들이 스토어에 연결되기 쉽게 만들어준다.
 <Router> : Pagination을 담당하는 컴포넌트를 제일 먼저 호출
 */
