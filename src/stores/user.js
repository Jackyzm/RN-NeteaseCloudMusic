import { observable, action } from 'mobx';
import storage from '@utils/storage';
import { _loginWithPhone, _loginWithEmail, _getPersonalized } from '../utils/api/common';

class User {
    @observable userInfo;

    constructor() {
        this.userInfo = {};
        this.userLocal = {};
        storage.getData('userInfo').then(res => {
            this.userInfo = JSON.parse(res);
        });
        storage.getData('userLocal').then(res => {
            this.userLocal = JSON.parse(res);
        });
    }

    @action
    getPersonalized = () => {
        _getPersonalized()
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            });
    };

    @action
    loginWithPhone = (params, callback) => {
        _loginWithPhone(params)
            .then(res => {
                console.log(res);
                storage.setData('userInfo', JSON.stringify(res)).then(() => {
                    if (callback) callback();
                });
            })
            .catch(e => {
                console.log(e);
            });
    };

    @action
    loginWithEmail = params => {
        _loginWithEmail(params)
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            });
    };
}

const user = new User();

export default user;
