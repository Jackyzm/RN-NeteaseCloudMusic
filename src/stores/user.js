import { observable, action } from 'mobx';
import storage from '@utils/storage';
import {
    _loginWithPhone,
    _loginWithEmail,
    _logout,
    _getUserSubCount,
    _getUserDetail,
    _getUserPlaylist,
    _loginRefresh,
} from '../utils/api/user';
import { Message } from '@components';

class User {
    @observable userInfo = {};

    @observable userLocal = {};

    @observable userSubCount = {};

    @observable userDetail = {};

    @observable userPlaylist = [];

    constructor() {
        this.loginRefresh({});
        storage
            .getItem('userInfo')
            .then(res => {
                this.userInfo = JSON.parse(res);
            })
            .then(() => {
                storage
                    .getItem('userDetail')
                    .then(res => {
                        this.userDetail = JSON.parse(res);
                    })
                    .catch(() => {
                        this.getUserDetail({ uid: this.userInfo.profile.userId });
                    });
            })
            .then(() => {
                storage
                    .getItem('userPlaylist')
                    .then(res => {
                        this.userPlaylist = JSON.parse(res);
                    })
                    .catch(() => {
                        this.getUserPlaylist({ uid: this.userInfo.profile.userId });
                    });
            });

        storage.getItem('userLocal').then(res => {
            this.userLocal = JSON.parse(res);
        });

        storage
            .getItem('userSubCount')
            .then(res => {
                this.userSubCount = JSON.parse(res);
            })
            .catch(() => {
                this.getUserSubCount();
            });
    }

    @action
    getUserDetail = params => {
        _getUserDetail(params).then(res => {
            if (res.code === 200) {
                storage.setItem('userDetail', JSON.stringify(res)).then(() => {
                    this.userDetail = res;
                });
            }
        });
    };

    @action
    getUserSubCount = () => {
        _getUserSubCount().then(res => {
            if (res.code === 200) {
                storage.setItem('userSubCount', JSON.stringify(res)).then(() => {
                    this.userSubCount = res;
                });
            }
        });
    };

    @action
    getUserPlaylist = params => {
        _getUserPlaylist(params).then(res => {
            if (res.code === 200) {
                storage.setItem('userPlaylist', JSON.stringify(res.playlist)).then(() => {
                    this.userPlaylist = res.playlist;
                });
            }
        });
    };

    @action
    loginWithPhone = (params, callback) => {
        _loginWithPhone(params).then(res => {
            if (res.code === 200) {
                storage.setItem('userInfo', JSON.stringify(res)).then(() => {
                    this.userInfo = res;
                    this.getUserDetail({ uid: this.userInfo.profile.userId });
                    this.getUserPlaylist({ uid: this.userInfo.profile.userId });
                    this.getUserSubCount();
                    if (callback) callback();
                });
            } else if (res.msg) {
                Message(res.msg);
            } else {
                Message('账号或密码错误！');
            }
        });
    };

    @action
    loginWithEmail = (params, callback) => {
        _loginWithEmail(params).then(res => {
            if (res.code === 200) {
                storage.setItem('userInfo', JSON.stringify(res)).then(() => {
                    this.userInfo = res;
                    this.getUserDetail({ uid: this.userInfo.profile.userId });
                    this.getUserPlaylist({ uid: this.userInfo.profile.userId });
                    this.getUserSubCount();
                    if (callback) callback();
                });
            } else if (res.msg) {
                Message(res.msg);
            } else {
                Message('账号或密码错误！');
            }
        });
    };

    @action
    loginRefresh = params => {
        _loginRefresh(params).then(res => {
            console.log(res);
        });
    };

    @action
    logout = (params, callback) => {
        _logout(params).then(res => {
            if (res.code === 200) {
                storage.removeItem('userInfo').then(() => {
                    if (callback) callback();
                });
            }
        });
    };
}

const user = new User();

export default user;
