import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
    render() {
        const { style = {}, textStyle = {}, onPress = () => {}, children } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={style}>
                <Text style={textStyle}>{children}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
