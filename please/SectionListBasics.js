import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          //렌더링할 아이템
          {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
          {
            title: 'J',
            data: [
              'Jackson',
              'James',
              'Jillian',
              'Jimmy',
              'Joel',
              'John',
              'Julie',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>} //섹션의 항목을 렌더링하는 기본함수
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )} //맨 위에 렌더링
        keyExtractor={(item, index) => index} //주어진 인덱스에 대한 교유 키를 추출, 키는 캐싱에 사용되며 항목 재주문을 추적하는데에도 사용됨
      />
      {/* SectionList의 구성요소   */}
      {/* <SectionList sections={DataContainer} keyExtractor={yourkeyextractor} renderItem={yourenderItem} renderSectionHeader={yoursectionheader} /> */}
    </View>
  );
};

export default SectionListBasics;
