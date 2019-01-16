import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { Header, Footer } from '@components';
import Home from '@routes/Home';
import Music from './Music';
import Video from './Video';

// 顶部路由
const HomeNavigatorScreen = createMaterialTopTabNavigator(
    {
        Home,
        Music,
        Video,
    },
    {
        initialRouteName: 'Home',
        tabBarComponent: Header,
    }
);

// footer置入
const HomeContainer = createAppContainer(HomeNavigatorScreen);

@Footer
class HomeContainerComponent extends Component {
    render() {
        return <HomeContainer />;
    }
}

export default HomeContainerComponent;
