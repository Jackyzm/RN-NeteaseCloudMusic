import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SongListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.defaultShow || false,
        };
    }

    render() {
        const { title, num, children } = this.props;
        const { show } = this.state;
        return (
            <View>
                <View style={{ backgroundColor: '#eee', flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this.setState({ show: !show })}
                        style={{ flex: 1, flexDirection: 'row' }}
                    >
                        {show ? (
                            <Text style={{ fontFamily: 'iconfont', fontSize: 20 }}>&#xe60d;</Text>
                        ) : (
                            <Text style={{ fontFamily: 'iconfont', fontSize: 20 }}>&#xe605;</Text>
                        )}
                        <Text>
                            {title}({num || 0})
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'iconfont', fontSize: 26 }}>&#xe7b3;</Text>
                </View>
                <View>{show ? children : null}</View>
            </View>
        );
    }
}

export default SongListContent;
