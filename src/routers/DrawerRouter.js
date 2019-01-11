import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { CustomDrawerContentComponent } from '@components';
import DrawerNavigationService from '@utils/DrawerNavigationService';
import HomeContainerComponent from './Home';

const DrawerNavigator = createDrawerNavigator(
    {
        Home: props => {
            DrawerNavigationService.setTopLevelNavigator(props);
            return <HomeContainerComponent />;
        },
        // Login: LoginNavigatorScreen,
    },
    {
        drawerWidth: 300, // 展示的宽度
        drawerPosition: 'left', // 抽屉在左边还是右边
        contentComponent: CustomDrawerContentComponent, // 自定义抽屉组件
        initialRouteName: 'Home',
    }
);

const DrawerContainer = createAppContainer(DrawerNavigator);

export default DrawerContainer;
