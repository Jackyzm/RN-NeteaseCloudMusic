import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import theme from '@utils/theme';

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: theme.primaryTheme.color,
        position: 'relative',
    },
    container: {
        flex: 1,
        position: 'relative',
        height: '100%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0ff',
    },
    flexBottom: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -6,
        right: 0,
        left: 0,
        height: 40,
    },
});

const Footer = Container => {
    class WrappedComponent extends Component {
        render() {
            return (
                <SafeAreaView style={styles.SafeAreaView}>
                    <View style={styles.container}>
                        <Container {...this.props} />
                        <View style={styles.footer}>
                            <Text>123</Text>
                        </View>
                    </View>
                    <View style={styles.flexBottom} />
                </SafeAreaView>
            );
        }
    }
    return WrappedComponent;
};

export default Footer;
