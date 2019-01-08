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
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import stores from './stores';

import theme from './utils/theme';
import { Header, CustomDrawerContentComponent } from '@components';

import Home from './routes/Home';
import Detail from './routes/Detail';

import Drawer from './routes/Drawer';

const TabNavigatorScreen = createMaterialTopTabNavigator(
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

const DrawerNavigator = createDrawerNavigator(
    {
        Home: TabNavigatorScreen,
        Drawer,
    },
    {
        drawerWidth: 300, // 展示的宽度
        drawerPosition: 'left', // 抽屉在左边还是右边
        contentComponent: CustomDrawerContentComponent, // 自定义抽屉组件
    }
);

const AppContainer = createAppContainer(DrawerNavigator);

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
            <Provider {...stores}>
                <SafeAreaView style={styles.SafeAreaView}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.container}>
                        <AppContainer />
                        <View style={styles.flexBottom} />
                    </View>
                </SafeAreaView>
            </Provider>
        );
    }
}
