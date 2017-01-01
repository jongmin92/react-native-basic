import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication Failed.', password: '', loading: false};
    default:
      return state;
  }
};

/*
 LINE : 17
 INITIAL_STATE 가 필요한 이유 다음을 참고한다.
 참고 : <http://stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer>

 LINE : 20
 ...은 spread operator이다.
 전개 연산자(spread operator)는 식(expression)이 여러 인수(함수 호출 용)나
 여러 요소(배열 리터럴 용) 또는 여러 변수(비구조화 할당 용)가 예상되는 곳에 확장될 수 있도록 한다.
 참고 : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator>
 */