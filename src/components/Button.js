import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
        };
    }

    btnClick() {
        this.setState({ click: true });
    }

    render() {
        const { style = {}, onPress = () => {}, children } = this.props;
        const { click } = this.state;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => {
                    this.setState({ click: true });
                }}
                onPressOut={() => {
                    this.setState({ click: false });
                }}
                onPress={() => {
                    onPress();
                }}
                style={{ flexDirection: 'row', justifyContent: 'center' }}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: style.borderColor || '#d43c33',
                        paddingRight: style.paddingRight || 10,
                        paddingLeft: style.paddingLeft || 10,
                        width: style.width,
                        borderRadius: style.borderRadius,
                        backgroundColor: click ? style.borderColor || '#d43c33' : style.backgroundColor || null,
                    }}
                >
                    <Text
                        style={{
                            color: click ? '#fff' : style.color || '#d43c33',
                            lineHeight: style.lineHeight || 26,
                            textAlign: 'center',
                            fontSize: style.fontSize || 14,
                        }}
                    >
                        {children}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Button;
