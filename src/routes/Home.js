import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import theme from '@utils/theme';
import { padding, shadow } from '@utils/style';

const styles = StyleSheet.create({
    topUserBox: {
        color: '#fff',
        position: 'relative',
    },
    topUserContent: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 10,
        width: '90%',
        height: 110,
        marginLeft: '5%',
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
});

@inject(state => ({
    num: state.test.num,
    text: state.test.text,
    addNum: state.test.addNum,
    cutNum: state.test.cutNum,
    getPersonalized: state.test.getPersonalized,
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

    toJoinVip() {
        console.log('vip');
    }

    render() {
        const show = true;
        const userInfo = {
            name: '物理变化、',
            avatar: '',
        };
        return (
            <ScrollView alwaysBounceVertical={false}>
                <View>
                    {show ? (
                        <View style={styles.topUserBox}>
                            <View style={{ backgroundColor: theme.primaryTheme.color, height: 80 }} />
                            <View style={styles.topUserContent}>
                                <View style={styles.userAvatar}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={userInfo.avatar}
                                            style={{ backgroundColor: '#ccc', width: 50, height: 50, borderRadius: 25 }}
                                        />
                                        <Text style={{ lineHeight: 50, marginLeft: 10 }}>{userInfo.name}</Text>
                                    </View>
                                    <View style={{ paddingTop: 10 }}>
                                        <TouchableOpacity
                                            onPress={this.toJoinVip}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: theme.primaryTheme.color,
                                                ...padding(6),
                                                borderRadius: 30,
                                            }}
                                        >
                                            <Text style={{ color: theme.primaryTheme.color, fontSize: 12 }}>
                                                开通会员
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            onPress={() => {}}
                                            style={{
                                                width: 31,
                                                height: 20,
                                                borderWidth: 1,
                                                borderColor: theme.primaryTheme.color,
                                                ...padding(2),
                                            }}
                                        >
                                            <Text style={{ color: theme.primaryTheme.color, fontSize: 12 }}>福利</Text>
                                        </TouchableOpacity>
                                        <Text style={{ marginLeft: 10 }}>黑胶VIP 首开低至9元</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>更多</Text>
                                        <Text style={{ fontFamily: 'iconfont' }}>&#xe605;</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : null}
                </View>
            </ScrollView>
        );
    }
}

export default Home;
