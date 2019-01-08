import { observable, action } from 'mobx';
import { _getPersonalized } from '../utils/api/common';

class Test {
    @observable text;

    @observable num;

    constructor() {
        this.num = 0;
        this.text = 'Hello, this is homePage!!!';
    }

    @action
    addNum = () => {
        this.num += 1;
    };

    @action
    cutNum = () => {
        this.num -= 1;
    };

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

const test = new Test();

export default test;
