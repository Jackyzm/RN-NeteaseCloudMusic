import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(state => ({
    getSongUrl: state.common.getSongUrl,
}))
@observer
class PlayListMusicItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
        };
    }

    render() {
        const { data, num, getSongUrl } = this.props;
        const { click } = this.state;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => getSongUrl({ id: data.id })}
                onPressIn={() => this.setState({ click: true })}
                onPressOut={() => this.setState({ click: false })}
                style={[click ? { backgroundColor: '#ccc' } : {}]}
            >
                <View>
                    <Text>{num}</Text>
                    <Text>{data.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default PlayListMusicItem;
