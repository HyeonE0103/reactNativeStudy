//React Native Counter Example using Hook
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//React Native  Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#654321',
    padding: 10,
    margin: 10,
  },
});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="button!"
      />
      <TouchableOpacity //butoon 커스터마이징이 한계가 있기 때문에 버튼을 만들때 TouchableOpacity을 사용
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
