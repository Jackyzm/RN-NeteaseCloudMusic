import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    tabStyle: {
        flex: 1,
        position: 'relative',
    },
    textStyle: {
        color: '#f8f8f8',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        position: 'relative',
        zIndex: 9,
    },
    indicatorStyle: {
        width: 24,
        height: 3,
        borderRadius: 6,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 6,
        left: '50%',
        transform: [{ translateX: -12 }],
        zIndex: 9,
    },
});

class MusicHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Recommend: false,
            My: false,
            Transceiver: false,
        };
    }

    render() {
        const { Recommend, My, Transceiver } = this.state;
        const { navigationState, navigation } = this.props;
        let isRecommend = false;
        let isMy = false;
        let isTransceiver = false;
        if (navigationState.index === 0) {
            isRecommend = true;
        } else if (navigationState.index === 1) {
            isMy = true;
        } else {
            isTransceiver = true;
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPressIn={() => this.setState({ Recommend: true })}
                    onPressOut={() => this.setState({ Recommend: false })}
                    onPress={() => {
                        navigation.navigate('Recommend');
                    }}
                    style={styles.tabStyle}
                >
                    <View>
                        <View
                            style={[
                                { position: 'absolute', zIndex: 1, width: '100%', height: '100%' },
                                Recommend ? { backgroundColor: '#000', opacity: 0.1 } : {},
                            ]}
                        />
                        <Text style={[styles.textStyle, isRecommend ? { color: '#fff', fontWeight: 'bold' } : {}]}>
                            推荐
                        </Text>
                        {isRecommend ? <View style={styles.indicatorStyle} /> : null}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPressIn={() => this.setState({ My: true })}
                    onPressOut={() => this.setState({ My: false })}
                    onPress={() => navigation.navigate('My')}
                    style={styles.tabStyle}
                >
                    <View>
                        <View
                            style={[
                                { position: 'absolute', zIndex: 1, width: '100%', height: '100%' },
                                My ? { backgroundColor: '#000', opacity: 0.1 } : {},
                            ]}
                        />
                        <Text style={[styles.textStyle, isMy ? { color: '#fff', fontWeight: 'bold' } : {}]}>朋友</Text>
                        {isMy ? <View style={styles.indicatorStyle} /> : null}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPressIn={() => this.setState({ Transceiver: true })}
                    onPressOut={() => this.setState({ Transceiver: false })}
                    onPress={() => navigation.navigate('Transceiver')}
                    style={styles.tabStyle}
                >
                    <View>
                        <View
                            style={[
                                { position: 'absolute', zIndex: 1, width: '100%', height: '100%' },
                                Transceiver ? { backgroundColor: '#000', opacity: 0.1 } : {},
                            ]}
                        />
                        <Text style={[styles.textStyle, isTransceiver ? { color: '#fff', fontWeight: 'bold' } : {}]}>
                            电台
                        </Text>
                        {isTransceiver ? <View style={styles.indicatorStyle} /> : null}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default MusicHeader;
