import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    }
})

const Greeting = (props) => {
    return (
        <View style={styles.center}>
            <Text>Hello {props.name}!</Text>
        </View>
    )
}
const LotsOfGreetings = () => {
    return (
        <View style={[styles.center, {top: 100}]}>
        {/* View를 이용하여 스타일과 레이아웃 제어 */}
            <Greeting name='Rexxar' />
            {/* Greeting을 이용하여 구성요소를 사용자 지정  */}
            <Greeting name='Rexxar' />
            <Greeting name='Rexxar' />
        </View>
    );
};

export default LotsOfGreetings;