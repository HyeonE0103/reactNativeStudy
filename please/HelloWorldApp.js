import React from 'react';
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",   //가운데맞추기
            alignItems: "center"    //상하맞추기
        }}>
            <Text>Hello, world!</Text>
        </View>
    )
}
export default HelloWorldApp;