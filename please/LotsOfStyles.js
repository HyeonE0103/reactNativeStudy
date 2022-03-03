import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>  
      {/* 빨강글씨 */}
      <Text style={styles.bigBlue}>just bigBlue</Text>
      {/* 파랑, 큰 글씨 */}
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      {/* 빨강, 큰 글씨 */}
      <Text style={(styles.red, styles.bigBlue)}>red, then bigBlue</Text>
      {/* 파랑, 큰 글씨 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
