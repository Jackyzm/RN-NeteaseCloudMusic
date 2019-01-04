import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Footer: {
        backgroundColor: '#d43c33',
    },
});

class Footer extends Component {
    render() {
        return (
            <View style={styles.Footer}>
                <Text>123</Text>
            </View>
        );
    }
}

export default Footer;
