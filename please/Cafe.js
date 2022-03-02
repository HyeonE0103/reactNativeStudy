import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {    //props를 사용하면 react구성 요소를 사용자 지정할수 있음
    return (
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    );
}

const  Cafe = () => {
    return (
        <View>
            <Text>Welcome!</Text>
            <Cat name="Maru" /> 
            {/* <Cat> 다른 렌더링 name을 전달 */}
            <Cat name="Jellylorum"/>
            <Cat name="Spot"/>
        </View>
    )
}

export default Cafe;