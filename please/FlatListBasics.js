import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList //FlatList는 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할때 쓰임
                //JS에서의 map함수 역할과 비슷하나 더 많은 기능을 내포하고 있어 react-nativ에서 많이 쓰임
                //<ScrollView>는 데이터가 화면을 벗어났을때 단순히 Scroll을 생성하여 사용자와의 상호작용을
                //통해 벗어난 부분을 볼수 있게 해주는 목적
                //이에 반해 FlatList는 데이터가 화면에 벗어났을때도 Scroll을 생성하지만, 한번에 모든 데이터를 렌더링 하지 않고
                //화면에 보여지는 부분(혹은 설정한 수만큼의 데이터)만 렌더링 함 그렇기에 데이터의 길이가 가변적이고
                //데이터의 양을 예측할 수 없는 경우(API를 통해 외부에서 크기를 알 수 없는 데이터를 가져오는 경우)에 사용하기 적절
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
