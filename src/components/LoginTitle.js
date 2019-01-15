import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

@withNavigation
class LoginTitle extends Component {
    render() {
        const { title, navigation } = this.props;
        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        fontFamily: 'iconfont',
                        color: '#fff',
                        marginRight: 10,
                        fontSize: 20,
                    }}
                >
                    &#xe624;
                </Text>
                <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>
            </View>
        );
    }
}

export default LoginTitle;
