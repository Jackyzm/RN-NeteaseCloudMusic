// import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
// import { MusicHeader } from '@components';
import Recommend from '@routes/Video/Recommend';

// 顶部路由
const NavigatorScreen = createMaterialTopTabNavigator(
    {
        Recommend,
    },
    {
        initialRouteName: 'Recommend',
        // tabBarComponent: MusicHeader,
    }
);

export default NavigatorScreen;
