import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigatorScreen from './DrawerRouter';
import LoginNavigatorScreen from './Login';
import SongListDetailScreen from './SongListDetail';

const MainNavigator = createSwitchNavigator(
    {
        App: MainNavigatorScreen,
        Login: LoginNavigatorScreen,
        SongListDetail: SongListDetailScreen,
    },
    {
        initialRouteName: 'App',
    }
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
