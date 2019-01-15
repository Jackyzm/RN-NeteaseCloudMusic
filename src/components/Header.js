import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import theme from '@utils/theme';
import DrawerNavigationService from '@utils/DrawerNavigationService';

const styles = StyleSheet.create({
    Header: {
        height: 50,
        width: '100%',
        backgroundColor: theme.primaryTheme.color,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },

    center: {
        flexDirection: 'row',
    },
    utilIconStyle: {
        fontFamily: 'iconfont',
        color: '#fff',
        fontSize: 24,
    },
    drawerIcon: {},
    centerIcon: {
        paddingLeft: 10,
        paddingRight: 10,
        color: '#e0e0e0',
    },
    searchIcon: {},
});

@withNavigation
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        let isMusic = false;
        let isFind = false;
        let isMV = false;
        if (this.props.navigation.state.index === 0) {
            isMusic = true;
        } else if (this.props.navigation.state.index === 1) {
            isFind = true;
        } else {
            isMV = true;
        }
        return (
            <View style={styles.Header}>
                <View>
                    <Text onPress={() => DrawerNavigationService.navigation.openDrawer()} style={styles.utilIconStyle}>
                        &#xe74f;
                    </Text>
                </View>
                <View style={styles.center}>
                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={[styles.utilIconStyle, styles.centerIcon, isMusic ? { color: '#fff' } : {}]}
                    >
                        &#xe601;
                    </Text>
                    <Text
                        onPress={() => navigation.navigate('Music')}
                        style={[styles.utilIconStyle, styles.centerIcon, isFind ? { color: '#fff' } : {}]}
                    >
                        &#xe600;
                    </Text>
                    <Text
                        onPress={() => {}}
                        style={[styles.utilIconStyle, styles.centerIcon, isMV ? { color: '#fff' } : {}]}
                    >
                        &#xe60c;
                    </Text>
                </View>
                <View>
                    <Text style={styles.utilIconStyle}>&#xe603;</Text>
                </View>
            </View>
        );
    }
}

export default Header;
