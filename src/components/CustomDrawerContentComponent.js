import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { observer, inject } from 'mobx-react';
import { isEmptyObj } from '@utils/utils';
import { Button } from '@components';
import NavigationService from '@utils/NavigationService';

const styles = StyleSheet.create({
    CustomDrawerContentComponent: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
});

@inject(state => ({
    userInfo: state.user.userInfo,
    userLocal: state.user.userLocal,
}))
@observer
class CustomDrawerContentComponent extends Component {
    render() {
        const { userInfo } = this.props;
        return (
            <View style={styles.CustomDrawerContentComponent}>
                {isEmptyObj(userInfo) ? (
                    <ImageBackground
                        source={require('@assets/DrawerBgDefault.jpeg')}
                        style={{
                            width: '100%',
                            height: 240,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', color: '#f0f0f0', lineHeight: 24 }}>登录网易云音乐</Text>
                        <Text style={{ textAlign: 'center', color: '#f0f0f0', lineHeight: 24 }}>
                            手机电脑多端同步，尽享海量高品质音乐
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <Button
                                onPress={() => {
                                    NavigationService.navigation.navigate('Login');
                                }}
                                style={{
                                    borderColor: '#aaa',
                                    borderRadius: 15,
                                    fontSize: 12,
                                    color: '#fff',
                                }}
                            >
                                立即登录
                            </Button>
                        </View>
                    </ImageBackground>
                ) : (
                    <ImageBackground
                        source={require('@assets/DrawerBg.jpg')}
                        style={{ width: '100%', height: 240, position: 'relative' }}
                    >
                        <View style={{ position: 'absolute', bottom: 0 }}>
                            <Text>CustomDrawerContentComponent</Text>
                        </View>
                    </ImageBackground>
                )}
            </View>
        );
    }
}

export default CustomDrawerContentComponent;
