import { Dimensions } from 'react-native';
import Toast from 'react-native-root-toast';

const ToastView = (msg, time) => {
    const { height } = Dimensions.get('window');
    const toast = Toast.show(msg, {
        duration: Toast.durations.LONG,
        position: height - 100,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 100,
    });
    setTimeout(() => {
        Toast.hide(toast);
    }, time || 1000);
};

export default ToastView;
