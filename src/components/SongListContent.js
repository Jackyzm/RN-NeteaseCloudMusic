import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import NavigationService from '@utils/NavigationService';
import SongListContentItem from './SongListContentItem';

@inject(state => ({
    setParams: state.common.setParams,
}))
@observer
class SongListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.defaultShow || true,
        };
    }

    render() {
        const { title, num, list, type, setParams } = this.props;
        const { show } = this.state;
        const { navigation } = NavigationService;
        return (
            <View>
                <View style={{ backgroundColor: '#eee', flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this.setState({ show: !show })}
                        style={{ flex: 1, flexDirection: 'row' }}
                    >
                        {show ? (
                            <Text style={{ fontFamily: 'iconfont', fontSize: 12, lineHeight: 30 }}>&#xe60d;</Text>
                        ) : (
                            <Text style={{ fontFamily: 'iconfont', fontSize: 12, lineHeight: 30 }}>&#xe605;</Text>
                        )}
                        <Text style={{ lineHeight: 30, marginLeft: 10 }}>
                            {title}({num || 0})
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'iconfont', fontSize: 26 }}>&#xe7b3;</Text>
                </View>
                {show ? (
                    <View>
                        {list.map((item, index) => (
                            <SongListContentItem
                                key={index}
                                item={item}
                                type={type}
                                onPress={() => {
                                    setParams({ id: item.id });
                                    navigation.navigate('SongListDetail');
                                }}
                            />
                        ))}
                    </View>
                ) : null}
            </View>
        );
    }
}

export default SongListContent;
