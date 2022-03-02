import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Cat = props => {
  const [isHungry, setIsHungry] = useState(true); //상태변수는 isHungry이고 초기값은 true

  return (
    <View>
      <Text>
        I am {props.name}, {props.age} and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          //버튼을  누르면 상태가 false가 됨
          setIsHungry(false);
        }}
        disabled={!isHungry} //dis
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

const Cafes = () => {
  return (
    <>
      <Cat name="Munkstrap" age="13" />
      <Cat name="Spot" />
    </>
  );
};

export default Cafes;
