import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { Header, Footer } from '@components';

import { Login, LoginWithPhone, Register, ForgetPassword } from '@routes/Login';

// 顶部路由
const LoginNavigatorScreen = createStackNavigator(
    {
        Login,
        LoginWithPhone,
        Register,
        ForgetPassword,
    },
    {
        headerMode: 'none',
    }
);

const LoginNavigatorScreenContainer = createAppContainer(LoginNavigatorScreen);

export default LoginNavigatorScreenContainer;
