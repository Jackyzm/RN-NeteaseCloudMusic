import { observable, action } from 'mobx';
import { _getSongUrl } from '@utils/api/playList';

class Common {
    @observable params = {};

    @observable playSong = {};

    @action
    setParams = params => {
        this.params = params;
    };

    @action
    getSongUrl = params => {
        _getSongUrl(params).then(res => {
            if (res.code === 200) {
                console.log(res);
                this.playSong = res.data[0];
            }
        });
    };
}

const common = new Common();

export default common;
