/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    // Platform,
    StyleSheet,
    View,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {
    createAppContainer,
    createMaterialTopTabNavigator,
    // createDrawerNavigator,
} from 'react-navigation';
import Header from './components';
import Home from './routes/Home';
import Detail from './routes/Detail';

// import Drawer from './routes/Drawer';

const AppNavigator = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
        },
        Detail: {
            screen: Detail,
        },
    },
    {
        initialRouteName: 'Home',
        tabBarComponent: () => <Header />,
    }
);

// const AppDrawer = createDrawerNavigator({
//     Drawer: {
//         screen: Drawer,
//     },
// });

const AppContainer = createAppContainer(AppNavigator);
// const DrawerContainer = createAppContainer(AppDrawer);

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: '#d43c33',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    flexBottom: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -40,
        right: 0,
        left: 0,
        height: 40,
    },
});

export default class App extends Component {
    render() {
        return (
            <SafeAreaView style={styles.SafeAreaView}>
                <StatusBar barStyle="light-content" />
                <View style={styles.container}>
                    {/* <DrawerContainer /> */}
                    <AppContainer />
                    <View style={styles.flexBottom} />
                </View>
            </SafeAreaView>
        );
    }
}
