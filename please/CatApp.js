import React from 'react';
import { Image, Text, View } from 'react-native';

const CatApp = () => {
    return (
        <View>
            <Image
            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
            style={{width :200, height: 200}}   //jsx에서 js객체를 전달하려면 객체를 다른 중괄호 쌍으로 감싸야함
            />
            <Text>Hello, I am your cat!</Text>
        </View>
    );
};

export default CatApp;