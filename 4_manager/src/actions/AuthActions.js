import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};

/*
 LINE : 25~39
 App.js에서 store 생성시 미들웨어로 ReduxThunk를 사용했기 때문에  return 시 액션객체
 뿐만 아니라 함수객체 또한 return 가능하다. db 혹인 서버를 통한 비동기 처리시 이를 활용한다.
 매개변수로 받은 dispatch를 통해서 비동기 처리 후 또 다른 액션을 생성할 수 있다.

 LINE : 51
 react-native-router-flux 의 Actions를 통해 Router의 특정 Scene으로 navigate 할 수 있다.
 key 값이 main인 Scene으로 navigate 한다.
 */
