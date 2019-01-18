import React, { Component } from 'react';
import { Router, Scene, Tabs, Drawer } from 'react-native-router-flux';
import { Header, CustomDrawerContentComponent } from '@components';
import { Login } from '@routes/Login';
import Home from '@routes/Home';

// const Abc = () => (
//     <SafeAreaView style={{ flex: 1 }}>
//         <Router>
//             <Scene key="root" hideNavBar>
//                 <Tabs swipeEnabled tabBarPosition="top" hideNavBar hideTabBar={false} tabBarComponent={Header}>
//                     <Scene key="home" component={Home} hideNavBar />
//                     <Scene key="home1" component={Home} hideNavBar />
//                     <Scene key="home2" component={Home} hideNavBar />
//                 </Tabs>
//             </Scene>
//         </Router>
//     </SafeAreaView>
// );

class Content extends Component {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="login" component={Login} />
                    <Drawer hideDrawerButton hideNavBar contentComponent={CustomDrawerContentComponent}>
                        <Scene key="root" hideNavBar>
                            <Tabs
                                swipeEnabled
                                tabBarPosition="top"
                                hideNavBar
                                hideTabBar={false}
                                tabBarComponent={Header}
                            >
                                <Scene key="home" component={Home} hideNavBar />
                                <Scene key="home1" component={Home} hideNavBar />
                                <Scene key="home2" component={Home} hideNavBar />
                            </Tabs>
                        </Scene>
                    </Drawer>
                </Scene>
            </Router>
        );
    }
}

export default Content;
