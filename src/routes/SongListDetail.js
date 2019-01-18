import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { PlayListMusicItem } from '@components';

@inject(state => ({
    params: toJS(state.common.params),
    getPlayListDetail: state.playList.getPlayListDetail,
    playListDetail: toJS(state.playList.playListDetail),
}))
@observer
class SongListDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getPlayListDetail, params } = this.props;
        getPlayListDetail(params);
    }

    render() {
        console.log(this.props.playListDetail);
        const { playListDetail } = this.props;
        return (
            <View>
                <View>
                    <View>
                        <Text>播放全部</Text>
                        <Text>(共{(playListDetail.tracks && playListDetail.tracks.length) || 0}首)</Text>
                    </View>
                    <View>
                        {playListDetail.tracks
                            && playListDetail.tracks.map((item, index) => (
                                <PlayListMusicItem data={item} key={index} num={index + 1} />
                            ))}
                    </View>
                </View>
            </View>
        );
    }
}

export default SongListDetail;
