import React from 'react';
import {Image, ScrollView, Text, TextInput, View} from 'react-native';

const HelloWorldAppCat = () => {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Some more test</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};
// div와 span의 차이는 줄바꿈의 차이, div는 줄바꿈o span은 줄바꿈이 안됨x
export default HelloWorldAppCat;
