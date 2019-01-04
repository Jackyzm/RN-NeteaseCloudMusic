import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    CustomDrawerContentComponent: {
        backgroundColor: '#d43c33',
    },
});

class CustomDrawerContentComponent extends Component {
    render() {
        return (
            <View style={styles.CustomDrawerContentComponent}>
                <Text>CustomDrawerContentComponent</Text>
            </View>
        );
    }
}

export default CustomDrawerContentComponent;
