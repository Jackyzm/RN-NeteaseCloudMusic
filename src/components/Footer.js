import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { observer, inject } from 'mobx-react';
import theme from '@utils/theme';
// import Video from 'react-native-video';

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: theme.primaryTheme.color,
        position: 'relative',
    },
    container: {
        flex: 1,
        position: 'relative',
        height: '100%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0ff',
    },
    flexBottom: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -40,
        right: 0,
        left: 0,
        height: 40,
    },
});

const Footer = Container => {
    @inject(state => ({
        playSong: state.common.playSong,
    }))
    @observer
    class WrappedComponent extends Component {
        render() {
            const { playSong } = this.props;
            console.log(playSong);
            return (
                <SafeAreaView style={styles.SafeAreaView}>
                    <View style={styles.container}>
                        <Container {...this.props} />
                        <View style={styles.footer}>
                            {/* <Video
                                    source={{ uri: playSong.url }} // Can be a URL or a local file.
                                    // ref={ref => {
                                    //     this.player = ref;
                                    // }} // Store reference
                                    // onBuffer={this.onBuffer} // Callback when remote video is buffering
                                    // onError={this.videoError} // Callback when video cannot be loaded
                                    // style={styles.backgroundVideo}
                                /> */}
                        </View>
                        <View style={styles.flexBottom} />
                    </View>
                </SafeAreaView>
            );
        }
    }
    return WrappedComponent;
};

export default Footer;
