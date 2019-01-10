import { observable, action } from 'mobx';
import storage from '@utils/storage';
import { _getPersonalized } from '../utils/api/common';

class User {
    @observable userInfo;

    constructor() {
        this.userInfo = {};
        this.userLocal = {};
        storage.getData('userInfo').then((res) => {
            this.userInfo = res;
        });
        storage.getData('userLocal').then((res) => {
            this.userLocal = res;
        });
    }

    @action
    getPersonalized = () => {
        _getPersonalized()
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };
}

const user = new User();

export default user;
