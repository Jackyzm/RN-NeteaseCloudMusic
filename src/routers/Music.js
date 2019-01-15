// import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Recommend from '@routes/Music/Recommend';
import My from '@routes/Music/My';
import Transceiver from '@routes/Music/Transceiver';

// 顶部路由
const NavigatorScreen = createMaterialTopTabNavigator(
    {
        Recommend,
        My,
        Transceiver,
    },
    {
        initialRouteName: 'Recommend',
        // tabBarComponent: Header,
    }
);

export default NavigatorScreen;
