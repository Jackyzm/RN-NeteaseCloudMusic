import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Footer } from '@components';
import SongListDetail from '@routes/SongListDetail';

// 顶部路由
const SongListDetailNavigatorScreen = createStackNavigator(
    {
        SongListDetail,
    },
    {
        headerMode: 'none',
    }
);

// footer置入
const SongListDetailContainer = createAppContainer(SongListDetailNavigatorScreen);

@Footer
class SongListDetailContainerComponent extends Component {
    render() {
        return <SongListDetailContainer />;
    }
}

export default SongListDetailContainerComponent;
