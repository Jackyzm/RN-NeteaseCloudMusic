import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigatorScreen from './DrawerRouter';
import LoginNavigatorScreen from './Login';

const MainNavigator = createSwitchNavigator(
    {
        App: MainNavigatorScreen,
        Login: LoginNavigatorScreen,
    },
    {
        initialRouteName: 'App',
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
