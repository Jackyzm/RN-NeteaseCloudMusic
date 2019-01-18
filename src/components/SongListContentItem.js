import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

class SongListContentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
        };
    }

    render() {
        const { item, type, onPress } = this.props;
        const { click } = this.state;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[{ paddingTop: 6, paddingLeft: 10, paddingRight: 10 }, click ? { backgroundColor: '#ccc' } : {}]}
                onPress={() => onPress()}
                onPressIn={() => this.setState({ click: true })}
                onPressOut={() => this.setState({ click: false })}
            >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ paddingBottom: 6, paddingRight: 10 }}>
                        <Image source={{ uri: item.coverImgUrl }} style={{ width: 50, height: 50, borderRadius: 4 }} />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: '#f0f0f0',
                            paddingBottom: 6,
                        }}
                    >
                        <View style={{ flex: 1 }}>
                            <Text style={{ lineHeight: 30 }}>{item.name}</Text>
                            <Text style={{ fontSize: 12, color: '#888' }}>
                                {item.trackCount}首{type === 'sub' ? <Text> by {item.creator.nickname}</Text> : null}
                            </Text>
                        </View>
                        <Text style={{ fontFamily: 'iconfont' }}>&#xe7b3;</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SongListContentItem;
