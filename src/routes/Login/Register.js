import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { LoginTitle } from '@components';

class Register extends Component {
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#d43c33' }}>
                <LoginTitle title="手机号注册" />
                <View style={{ backgroundColor: '#fff', paddingTop: 40 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: '#222' }}>暂不支持注册</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default Register;
