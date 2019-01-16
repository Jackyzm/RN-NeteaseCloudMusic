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
    login: state.user.loginWithEmail,
}))
@observer
class LoginWithEmail extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    submitFunc() {
        const { email, password } = this.state;
        const { login } = this.props;
        const { navigation } = NavigationService;
        if (!email) return Message('请输入邮箱账号');
        if (!password) return Message('请输入密码');
        if (!/^[a-zA-Z0-9_-]+@163.com$/.test(email)) return Message('请输入正确的邮箱号');
        login({ email, password }, () => {
            navigation.navigate('App');
        });
    }

    render() {
        const { email, password } = this.state;
        const { navigation } = this.props;

        return (
            <SafeAreaView style={{ backgroundColor: '#d43c33' }}>
                <LoginTitle title="网易邮箱账号登录" />
                <View style={{ backgroundColor: '#fff', paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
                    <View style={styles.inputContent}>
                        <Text style={styles.icon}>&#xe641;</Text>
                        <TextInput
                            style={{ flex: 1, padding: 0, paddingLeft: 10 }}
                            autoFocus
                            keyboardType="numeric"
                            clearButtonMode="while-editing"
                            selectionColor="#d43c33"
                            placeholder="请输入邮箱账号"
                            onChangeText={text => this.setState({ email: text })}
                            value={email}
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

export default LoginWithEmail;
