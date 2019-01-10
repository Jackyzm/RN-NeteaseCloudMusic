/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {
    // Platform,
    StyleSheet,
    View,
    // SafeAreaView,
    StatusBar,
} from 'react-native';

import theme from '@utils/theme';
import NavigationService from '@utils/NavigationService';
import storage from '@utils/storage';
import AppContainer from './routers';
import stores from './stores';

global.storage = storage;

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: theme.primaryTheme.color,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
});

export default class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <View style={styles.SafeAreaView}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.container}>
                        <AppContainer
                            ref={navigatorRef => {
                                NavigationService.setTopLevelNavigator(navigatorRef);
                            }}
                        />
                    </View>
                </View>
            </Provider>
        );
    }
}
