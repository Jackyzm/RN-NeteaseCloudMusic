import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LoginTitle } from '@components';

class ForgetPassword extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#d43c33' }}>
                <LoginTitle title="忘记密码" />
                <View style={{ backgroundColor: '#fff', paddingTop: 40 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#222' }}>暂不支持找回密码</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default ForgetPassword;
