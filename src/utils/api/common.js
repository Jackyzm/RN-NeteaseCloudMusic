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

export async function _logout(params) {
    return await request('/logout', {
        method: 'POST',
        body: params,
    });
}

export async function _getUserSubCount() {
    return await request('/user/subcount');
}

export async function _getUserDetail(param) {
    return await request(`/user/detail?${qs.stringify(param)}`);
}
