import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { Header, Footer } from '@components';

import { Login, LoginWithPhone, Register, ForgetPassword, LoginWithEmail } from '@routes/Login';

// 顶部路由
const LoginNavigatorScreen = createStackNavigator(
    {
        Login,
        LoginWithPhone,
        Register,
        ForgetPassword,
        LoginWithEmail,
    },
    {
        headerMode: 'none',
    }
);

const LoginNavigatorScreenContainer = createAppContainer(LoginNavigatorScreen);

export default LoginNavigatorScreenContainer;
