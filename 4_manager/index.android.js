import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('manager', () => App);

/*
 react-native library는 react로 native를 개발할 수 있도록 해준다.
 index.ios.js, index.android.js 는 각각 ios와 android 앱 실행시의 entry point 이다.
 따라서 react-native의 AppRegistry를 호출하여 App의 root 컴포넌트를 등록해야한다.

 import & export 참고 : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export>
 import 시 {}의 사용유무는 해당 파일에서 export 하는 방법에 따라 다르다.
 default export의 경우, 모듈 당 딱 하나의 default export가 있다.
 default export는 함수 또는 클래스, 오브젝트, 혹은 다른 것들이 될 수 있다.
 이값은 가장 간단하게 import 할 수 있도록 하기 때문에 내보낼 값 중 "메인"에 해당하는 값으로 고려해야한다.
 */