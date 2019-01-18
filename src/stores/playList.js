import { observable, action } from 'mobx';
import { _getPlayListDetail } from '@utils/api/playList';

class PlayList {
    @observable params = {};

    @observable playListDetail = {};

    @action
    setParams = params => {
        this.params = params;
    };

    @action
    getPlayListDetail = params => {
        _getPlayListDetail(params).then(res => {
            if (res.code === 200) {
                this.playListDetail = res.playlist;
            }
        });
    };
}

const playList = new PlayList();

export default playList;
