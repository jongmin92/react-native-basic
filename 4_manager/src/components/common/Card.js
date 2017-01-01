import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };

/*
 LINE : 28
 이전에 선언된 함수를 export 할때는 '{}' 안에 적어주어야 한다.
 상수 function을 export 하는 방법으로는 다음과 같이도 가능하다.
 Line 4에서 export const Card = (props) => {........}
 */
