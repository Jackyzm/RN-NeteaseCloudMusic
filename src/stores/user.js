import { observable, action } from 'mobx';
import storage from '@utils/storage';
import { _loginWithPhone, _loginWithEmail, _logout, _getUserSubCount, _getUserDetail } from '../utils/api/common';
import { Message } from '@components';

class User {
    @observable userInfo;

    @observable userLocal;

    @observable userSubCount;

    @observable userDetail;

    constructor() {
        this.userInfo = {};
        this.userLocal = {};
        this.userSubCount = {};
        this.userDetail = {};

        storage.getItem('userInfo').then(res => {
            this.userInfo = JSON.parse(res);
            this.getUserDetail({ uid: this.userInfo.profile.userId });
        });

        storage.getItem('userLocal').then(res => {
            this.userLocal = JSON.parse(res);
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
    loginWithPhone = (params, callback) => {
        _loginWithPhone(params).then(res => {
            if (res.code === 200) {
                storage.setItem('userInfo', JSON.stringify(res)).then(() => {
                    this.userInfo = res;
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
