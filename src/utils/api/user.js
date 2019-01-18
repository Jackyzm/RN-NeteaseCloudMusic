import qs from 'qs';
import request from '../request';

export async function _getPersonalized() {
    return await request('/personalized');
}

export async function _loginWithPhone(params) {
    return await request('/login/cellphone', {
        method: 'POST',
        body: params,
    });
}

export async function _loginWithEmail(params) {
    return await request('/login', {
        method: 'POST',
        body: params,
    });
}

export async function _loginRefresh(params) {
    return await request('/login/refresh', {
        method: 'POST',
        body: params,
    });
}
export async function _logout(params) {
    return await request('/logout', {
        method: 'POST',
        body: params,
    });
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export async function _getUserSubCount() {
    return await request('/user/subcount');
}

// 获取用户详情
export async function _getUserDetail(param) {
    return await request(`/user/detail?${qs.stringify(param)}`);
}

// 获取用户歌单
export async function _getUserPlaylist(param) {
    return await request(`/user/playlist?${qs.stringify(param)}`);
}
