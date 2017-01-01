import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});

/*
 LINE : 6
 redux의 앱이 복잡해 질수록 reducer는 복잡해 질 것이고, 각기 독립적인 부분을 관리하는 별도의 함수로
 분리하고 싶을 것이다. cobineReducers는 각기 분리된 reducer들을 하나로 합쳐준다고 생각하면 된다.
 하나로 합쳐진 reducer는 모든 reducer를 호출하고, state는 각 reducer의 key값과 일치한다.
 이 key값은 각 컴포넌트에서 connect로 reducer와 연결할 때 매개변수로 전달되는 mapStateToProps의
 매개변수로 전달받을 수 있다.
 참고 : <https://dobbit.github.io/redux/api/combineReducers.html>
 */