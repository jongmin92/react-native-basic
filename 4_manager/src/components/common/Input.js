import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

/*
 LINE : 4
 props를 object destruction 을 통해서 받아 사용한다.
 const Input = (props) => {.....} 처럼 props로 받은 후 props.xxx로 사용도 가능하다.
 코딩 스타일 나름...
 LINE : 5
 각각의 style도 object destruction 을 통해서 효율적으로 사용 가능하다.
 LINE 16: OnChangeText 는 TextInput component의 input text가 변경될때마다
 콜백으로 호출되며 파라미터로 입력된 text를 넘겨준다.
 참고 : <https://facebook.github.io/react-native/docs/textinput.html>
 */
