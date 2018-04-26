import React from 'react';
import { View } from 'react-native';

export const CardSection = (props) => (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#EEE',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#888',
        position: 'relative'
    }
};
