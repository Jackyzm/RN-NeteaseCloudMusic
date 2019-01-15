import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@components';
import NavigationService from '@utils/NavigationService';

const styles = StyleSheet.create({
    otherLine: { width: 50, borderTopWidth: 1, borderTopColor: '#ccc', marginTop: 6 },
    loginTypeStyleBox: {
        marginRight: 20,
        marginLeft: 20,
    },
    loginTypeStyleContent: {
        borderWidth: 1,
        width: 40,
        height: 40,
        marginBottom: 5,
        borderRadius: 40,
    },
    loginTypeStyleIcon: {
        fontFamily: 'iconfont',
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 40,
    },
    loginTypeStyleText: {
        fontSize: 10,
        textAlign: 'center',
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weChat: false,
            qq: false,
            weiBo: false,
            wangYi: false,
        };
    }

    render() {
        const { navigation } = this.props;
        const { weChat, qq, weiBo, wangYi } = this.state;
        return (
            <View style={{ flex: 1 }}>
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
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginTop: 50 }}>
                    <View>
                        <View>
                            <Button
                                onPress={() => {
                                    navigation.navigate('LoginWithPhone');
                                }}
                                style={{ width: '80%', lineHeight: 40, borderRadius: 20, fontSize: 14 }}
                            >
                                手机号登录
                            </Button>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Button
                                onPress={() => {
                                    navigation.navigate('Register');
                                }}
                                style={{ width: '80%', lineHeight: 40, borderRadius: 20, fontSize: 14 }}
                            >
                                注册
                            </Button>
                        </View>

                        <Text
                            onPress={() => NavigationService.navigation.navigate('App')}
                            style={{
                                marginTop: 30,
                                color: '#444',
                                textAlign: 'center',
                                textDecorationLine: 'underline',
                            }}
                        >
                            游客试用
                        </Text>
                    </View>
                    <View style={{ paddingBottom: 40 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                            <View style={styles.otherLine} />
                            <Text style={{ marginLeft: 20, marginRight: 20 }}>其他登录方式</Text>
                            <View style={styles.otherLine} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={[styles.loginTypeStyleBox, { paddingLeft: 16 }]}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPressIn={() => {
                                        this.setState({ weChat: true });
                                    }}
                                    onPressOut={() => {
                                        this.setState({ weChat: false });
                                    }}
                                    style={[
                                        styles.loginTypeStyleContent,
                                        {
                                            backgroundColor: weChat ? '#62b900' : null,
                                            borderColor: weChat ? '#62b900' : '#999',
                                        },
                                    ]}
                                >
                                    <Text style={[{ color: weChat ? '#fff' : '#62b900' }, styles.loginTypeStyleIcon]}>
                                        &#xe607;
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.loginTypeStyleText}>微信</Text>
                            </View>
                            <View style={styles.loginTypeStyleBox}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPressIn={() => {
                                        this.setState({ qq: true });
                                    }}
                                    onPressOut={() => {
                                        this.setState({ qq: false });
                                    }}
                                    style={[
                                        styles.loginTypeStyleContent,
                                        {
                                            backgroundColor: qq ? '#3697DB' : null,
                                            borderColor: qq ? '#3697DB' : '#999',
                                        },
                                    ]}
                                >
                                    <Text style={[{ color: qq ? '#fff' : '#3697DB' }, styles.loginTypeStyleIcon]}>
                                        &#xe609;
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.loginTypeStyleText}>QQ</Text>
                            </View>
                            <View style={styles.loginTypeStyleBox}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPressIn={() => {
                                        this.setState({ weiBo: true });
                                    }}
                                    onPressOut={() => {
                                        this.setState({ weiBo: false });
                                    }}
                                    style={[
                                        styles.loginTypeStyleContent,
                                        {
                                            backgroundColor: weiBo ? '#d43c33' : null,
                                            borderColor: weiBo ? '#d43c33' : '#999',
                                        },
                                    ]}
                                >
                                    <Text style={[{ color: weiBo ? '#fff' : '#d43c33' }, styles.loginTypeStyleIcon]}>
                                        &#xe632;
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.loginTypeStyleText}>微博</Text>
                            </View>
                            <View style={styles.loginTypeStyleBox}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPressIn={() => {
                                        this.setState({ wangYi: true });
                                    }}
                                    onPressOut={() => {
                                        this.setState({ wangYi: false });
                                    }}
                                    onPress={() => {}}
                                    style={[
                                        styles.loginTypeStyleContent,
                                        {
                                            marginLeft: 5,
                                            backgroundColor: wangYi ? '#d43c33' : null,
                                            borderColor: wangYi ? '#d43c33' : '#999',
                                        },
                                    ]}
                                >
                                    <Text style={[{ color: wangYi ? '#fff' : '#d43c33' }, styles.loginTypeStyleIcon]}>
                                        &#xe608;
                                    </Text>
                                </TouchableOpacity>
                                <Text style={styles.loginTypeStyleText}>网易邮箱</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;
