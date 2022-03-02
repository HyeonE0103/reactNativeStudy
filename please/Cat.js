import React from 'react';
import {Text, TextInput, View} from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const Cat = () => {
  return (
    <View>
      <Text>Hello, I am your cat!</Text>
      <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
      <TextInput
      style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
      }}
      defaultValue="Name me" />
    </View>
  );
};

export default Cat;
