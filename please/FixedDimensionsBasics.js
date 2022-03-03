import React from 'react';
import {View} from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    // <View>
    //   <View
    //     style={{
    //       width: 50,
    //       height: 50,
    //       backgroundColor: 'powderblue',
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: 'skyblue',
    //     }}
    //   />
    //   <View
    //     style={{
    //       width: 150,
    //       height: 150,
    //       backgroundColor: 'steelblue',
    //     }}
    //   />
    // </View>
    // <View style={{flex: 1}}>
    // {/* flex를 이용하여 비율제어
    //     크기가 정의된 상위 항목이 필요 */}
    //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    // </View>
    <View style={{height: '100%'}}>
      {/* 화면의 특정부분을 채우고 싶지만 레이아웃을 사용하지 않으려면 백분율 값을 사용
    가변치수(flex)와 유사하게 백분율 치수에는 크기가 정의된 상위 항목이 필요 */}
      <View style={{height: '15%', backgroundColor: 'powderblue'}} />
      <View style={{width: '66%', height: '35%', backgroundColor: 'skyblue'}} />
      <View
        style={{width: '33%', height: '50%', backgroundColor: 'steelblue'}}
      />
    </View>
  );
};

export default FixedDimensionsBasics;
