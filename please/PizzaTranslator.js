import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ') //스페이스를 기준으로 나눔
          .map(word => word && '🍕') //이중공백까지 피자로 만드는것을 피하기 위해 &&을 사용
          .join(' ')}{' '}
        {/* //피자 뒤에 공백추가 */}
      </Text>
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => '🍕')    //요렇게 하면 이중공백은 단어로 인지해 피자를 넣어줌
          .join(' ')}{' '}
      </Text>
    </View>
  );
};

export default PizzaTranslator;
