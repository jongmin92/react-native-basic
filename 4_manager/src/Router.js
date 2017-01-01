import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from'./components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login"/>
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employeses"
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
      </Scene>
    </Router>
  )
};

export default RouterComponent;

/*
 Line: 2
 react-native-router-flux : pagination 을 도와주는 Router 를 사용가능

 Line: 10~27
 Router와 Scene의 사용법 참조 : <https://github.com/aksonov/react-native-router-flux/blob/master/docs/API_CONFIGURATION.md>
 */