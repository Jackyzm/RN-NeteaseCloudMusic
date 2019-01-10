import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={require('@assets/loginBg.jpg')}
                    style={{
                        width: '100%',
                        height: 300,
                    }}
                >
                    <View
                        style={{
                            height: 300,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255,255,255,0.9)',
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontFamily: 'iconfont',
                                    fontSize: 80,
                                    color: '#d43c33',
                                }}
                            >
                                &#xe604;
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <Text>Login</Text>
            </View>
        );
    }
}

export default Login;
