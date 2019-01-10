import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { Header, Footer } from '@components';

import Login from '@routes/Login/Login';

// 顶部路由
const LoginNavigatorScreen = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
    },
    {
        headerMode: 'none',
    }
);

const LoginNavigatorScreenContainer = createAppContainer(LoginNavigatorScreen);

export default LoginNavigatorScreenContainer;
