import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextInANest = () => {
    return (
        <Text style={StyleSheet.baseText}>
            <Text style={styles.titleText} onPress={onPressTitle}>
                
            </Text>
        </Text>
    );
};

export default TextInANest;