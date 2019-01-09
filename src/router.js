import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { Header, Footer } from '@components';

import Home from './routes/Home';
import Detail from './routes/Detail';

// 顶部路由
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
        tabBarComponent: Header,
    }
);

// footer置入
const TabNavigatorScreenContainer = createAppContainer(TabNavigatorScreen);

@Footer
class TabNavigatorScreenContainerComponent extends Component {
    render() {
        return <TabNavigatorScreenContainer />;
    }
}

export default TabNavigatorScreenContainerComponent;
