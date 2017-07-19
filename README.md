# react-native-basic
**Udemy의 리엑트 네이티브 강좌를 들으며 실습했던 프로젝트 모음입니다.**<br/>
수강했던 강좌는 [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/overview)입니다.

프로젝트는 다음과 같이 총 4가지 입니다.<br/>
1_albums<br/>
2_auth<br/>
3_tech_stack<br/>
4_manager<br/>

리엑트 네이티브를 처음 접할때 도움이 되는 프로젝트 입니다.<br/>
먼저 공식홈페이지의 튜토리얼을 먼저 보고 오신다면 더 도움이 될것 같습니다.<br/>
3_tech_stack과 4_manager는 **redux를 사용**하고 있으므로 redux의 개념이 필요합니다.(action, reducer)<br/>
4_manager의 경우 강좌를 듣고 복습하며 최대한 상세하게 주석을 덧붙였습니다.

## 시작하기

### Prerequisites
리엑트 네이티브로 프로젝트를 하기 위해서는 Node.js, Watchman, the React Native command line interface, and Xcode가 필요합니다. 해당 프로젝트들은 React Native 0.39 버전을 사용했습니다.
[공식홈페이지](https://facebook.github.io/react-native/docs/getting-started.html)를 참고해서 자신의 OS에 맞게 설치합니다.

### Install node module
각 프로젝트에 사용된 node module을 설치합니다.
```bash
cd 1_albums
npm intall
```

### Setting firebase
2_auth와 4_manager에는 [firebase](https://console.firebase.google.com/)가 사용되었습니다.<br/>
(1) 계정을 만들고 프로젝트를 생성 후 '이메일/비밀번호' 로그인을 활성화합니다.<br/>
(2) '웹 앱에 Firebase 추가'에서 config 부분만 복사하여 프로젝트 내에서 firebase가 사용되는 부분에 입력합니다.<br/>
(3) 좌측의 메뉴중 'Database'에서 '규칙'에 다음내용을 붙여넣습니다.
```bash
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

### Getting start
```bash
react-native run-ios
react-native run-android
```
