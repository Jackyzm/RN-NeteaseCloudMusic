import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Image } from 'react-native';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import theme from '@utils/theme';
import { padding, shadow } from '@utils/style';
import { isEmptyObj } from '@utils/utils';
import { Button, SongListContent } from '@components';

const styles = StyleSheet.create({
    topUserBox: {
        color: '#fff',
        position: 'relative',
        height: 130,
        marginBottom: 10,
    },
    topUserContent: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 10,
        width: '96%',
        height: 110,
        marginLeft: '2%',
        borderRadius: 5,
        ...shadow,
        ...padding(10),
    },
    userAvatar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    musicList: {
        flexDirection: 'row',
        paddingLeft: 20,
    },
    musicListIcon: {
        fontFamily: 'iconfont',
        fontSize: 26,
        paddingRight: 20,
        paddingTop: 18,
        color: theme.primaryTheme.color,
    },
    musicListTextBox: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 20,
        paddingTop: 20,
    },
    musicListTextNum: {
        color: '#999',
    },
});

@inject(state => ({
    userInfo: toJS(state.user.userInfo),
    userLocal: toJS(state.user.userLocal),
    userSubCount: toJS(state.user.userSubCount),
    userPlaylist: toJS(state.user.userPlaylist),
}))
@observer
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const { getPersonalized } = this.props;
        // getPersonalized();
    }

    render() {
        const { userInfo, userLocal, userSubCount, userPlaylist } = this.props;
        console.log(userPlaylist);
        const createdPlaylist = userPlaylist.slice(0, userSubCount.createdPlaylistCount || 0);
        const subPlaylist = userPlaylist.slice(userSubCount.createdPlaylistCount || 0);
        return (
            <ScrollView alwaysBounceVertical={false} style={{ backgroundColor: '#fff' }}>
                <View style={{ backgroundColor: '#fff', paddingBottom: 20 }}>
                    {!isEmptyObj(userInfo) ? (
                        <View style={styles.topUserBox}>
                            <View style={{ backgroundColor: theme.primaryTheme.color, height: 80 }} />
                            <View style={styles.topUserContent}>
                                <View style={styles.userAvatar}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={{ uri: userInfo.profile && userInfo.profile.avatarUrl }}
                                            style={{ backgroundColor: '#ccc', width: 50, height: 50, borderRadius: 25 }}
                                        />
                                        <Text style={{ lineHeight: 50, marginLeft: 10 }}>
                                            {userInfo.profile && userInfo.profile.nickname}
                                        </Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }}>
                                        <Button
                                            onPress={this.toJoinVip}
                                            style={{
                                                paddingRight: 6,
                                                paddingLeft: 6,
                                                borderRadius: 16,
                                            }}
                                        >
                                            开通会员
                                        </Button>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Button
                                            onPress={() => {}}
                                            style={{
                                                width: 32,
                                                lineHeight: 18,
                                                paddingRight: 2,
                                                paddingLeft: 2,
                                                fontSize: 12,
                                            }}
                                        >
                                            福利
                                        </Button>
                                        <Text style={{ marginLeft: 10, marginTop: 2 }}>黑胶VIP 首开低至9元</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 2 }}>
                                        <Text>更多</Text>
                                        <Text style={{ fontFamily: 'iconfont' }}>&#xe605;</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : null}
                    <View>
                        <View style={styles.musicList}>
                            <Text style={[styles.musicListIcon, { fontSize: 20 }]}>&#xe601;</Text>
                            <View style={styles.musicListTextBox}>
                                <Text>本地音乐</Text>
                                <Text style={styles.musicListTextNum}>（{userLocal.localNum || 0}）</Text>
                            </View>
                        </View>
                        <View style={styles.musicList}>
                            <Text style={styles.musicListIcon}>&#xe606;</Text>
                            <View style={styles.musicListTextBox}>
                                <Text>最近播放</Text>
                                <Text style={styles.musicListTextNum}>（{userLocal.localNum || 0}）</Text>
                            </View>
                        </View>
                        <View style={styles.musicList}>
                            <Text style={[styles.musicListIcon, { fontSize: 32, marginLeft: -4 }]}>&#xe61d;</Text>
                            <View style={styles.musicListTextBox}>
                                <Text>下载管理</Text>
                                <Text style={styles.musicListTextNum}>（{userLocal.localNum || 0}）</Text>
                            </View>
                        </View>
                        <View style={styles.musicList}>
                            <Text style={styles.musicListIcon}>&#xe65e;</Text>
                            <View style={styles.musicListTextBox}>
                                <Text>我的电台</Text>
                                <Text style={styles.musicListTextNum}>（{userLocal.localNum || 0}）</Text>
                            </View>
                        </View>
                        <View style={styles.musicList}>
                            <Text style={styles.musicListIcon}>&#xe639;</Text>
                            <View style={styles.musicListTextBox}>
                                <Text>我的收藏</Text>
                                <Text style={styles.musicListTextNum}>（{userLocal.localNum || 0}）</Text>
                            </View>
                        </View>
                        <View style={styles.musicList}>
                            <Text style={styles.musicListIcon}>&#xe602;</Text>
                            <View style={styles.musicListTextBox}>
                                <Text>Sati 空间</Text>
                                <Text style={styles.musicListTextNum}>（特别的聆听模式）</Text>
                            </View>
                        </View>
                    </View>
                    <SongListContent
                        title="创建的歌单"
                        num={userSubCount.createdPlaylistCount}
                        list={createdPlaylist}
                        type="create"
                    />
                    <SongListContent
                        title="收藏的歌单"
                        num={userSubCount.subPlaylistCount}
                        list={subPlaylist}
                        type="sub"
                    />
                </View>
            </ScrollView>
        );
    }
}

export default Home;
