import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '@utils/theme';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.primaryTheme.color,
    },
});

const Footer = (Container) => {
    class WrappedComponent extends Component {
        render() {
            return (
                <View style={styles.container}>
                    <Container {...this.props} />
                    <View style={styles.footer}>
                        <Text>123</Text>
                    </View>
                </View>
            );
        }
    }
    return WrappedComponent;
};

export default Footer;
