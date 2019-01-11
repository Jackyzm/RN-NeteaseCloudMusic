import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { Header, Footer } from '@components';

import { Login, LoginWithPhone } from '@routes/Login';

// 顶部路由
const LoginNavigatorScreen = createStackNavigator(
    {
        Login,
        LoginWithPhone,
    },
    {
        headerMode: 'none',
    }
);

const LoginNavigatorScreenContainer = createAppContainer(LoginNavigatorScreen);

export default LoginNavigatorScreenContainer;
