import qs from 'qs';
import request from '../request';

export async function _getPlayListDetail(params) {
    return await request(`/playlist/detail?${qs.stringify(params)}`);
}

export async function _getSongUrl(params) {
    return await request(`/song/url?${qs.stringify(params)}`);
}
