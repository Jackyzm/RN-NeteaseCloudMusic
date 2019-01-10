import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { CustomDrawerContentComponent } from '@components';
import Drawer from '@routes/Drawer';
import MainContainerComponent from './Home';
import LoginNavigatorScreen from './Login';

// 最外层嵌套左侧Drawer
const MainNavigator = createDrawerNavigator(
    {
        Home: MainContainerComponent,
        Login: LoginNavigatorScreen,
        Drawer,
    },
    {
        drawerWidth: 300, // 展示的宽度
        drawerPosition: 'left', // 抽屉在左边还是右边
        contentComponent: CustomDrawerContentComponent, // 自定义抽屉组件
        initialRouteName: 'Home',
    }
);
const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
