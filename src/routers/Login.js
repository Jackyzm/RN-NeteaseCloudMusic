import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Login, LoginWithPhone, Register, ForgetPassword, LoginWithEmail } from '@routes/Login';

// 登录
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
