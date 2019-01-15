import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { observer, inject } from 'mobx-react';
import { LoginTitle, Button, Message } from '@components';
import NavigationService from '@utils/NavigationService';

const styles = StyleSheet.create({
    inputContent: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        paddingTop: 10,
        paddingBottom: 10,
    },
    icon: {
        fontFamily: 'iconfont',
        fontSize: 20,
        color: '#999',
    },
});

@withNavigation
@inject(state => ({
    login: state.user.loginWithPhone,
}))
@observer
class LoginWithPhone extends Component {
    constructor(props) {
        super(props);
        this.state = { phone: '', password: '' };
    }

    submitFunc() {
        const { phone, password } = this.state;
        const { login } = this.props;
        const { navigation } = NavigationService;
        if (!phone) return Message('请输入手机号');
        if (!password) return Message('请输入密码');
        if (!/^1[3-9]\d{9}$/.test(phone)) return Message('请输入正确的手机号');
        login({ phone, password }, () => {
            navigation.navigate('App');
        });
    }

    render() {
        const { phone, password } = this.state;
        const { navigation } = this.props;

        return (
            <SafeAreaView style={{ backgroundColor: '#d43c33' }}>
                <LoginTitle title="手机号登录" />
                <View style={{ backgroundColor: '#fff', paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
                    <View style={styles.inputContent}>
                        <Text style={styles.icon}>&#xe611;</Text>
                        <Text style={{ lineHeight: 20 }}>+ 86</Text>
                        <TextInput
                            style={{ flex: 1, padding: 0, paddingLeft: 10 }}
                            autoFocus
                            maxLength={11}
                            keyboardType="numeric"
                            clearButtonMode="while-editing"
                            selectionColor="#d43c33"
                            placeholder="请输入手机号"
                            onChangeText={text => this.setState({ phone: text })}
                            value={phone}
                        />
                    </View>
                    <View style={[styles.inputContent, { marginTop: 20 }]}>
                        <Text style={styles.icon}>&#xe671;</Text>
                        <TextInput
                            style={{ flex: 1, padding: 0, paddingLeft: 10 }}
                            secureTextEntry
                            selectionColor="#d43c33"
                            placeholder="请输入密码"
                            clearButtonMode="while-editing"
                            onChangeText={text => this.setState({ password: text })}
                            value={password}
                        />
                        <Text
                            onPress={() => navigation.navigate('ForgetPassword')}
                            style={{ color: '#0066cc', fontSize: 12 }}
                        >
                            忘记密码？
                        </Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button
                            onPress={() => {
                                this.submitFunc();
                            }}
                            style={{
                                width: '96%',
                                borderRadius: 20,
                                lineHeight: 36,
                                fontSize: 16,
                                color: '#fff',
                                backgroundColor: '#d43c33',
                            }}
                        >
                            登录
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default LoginWithPhone;
