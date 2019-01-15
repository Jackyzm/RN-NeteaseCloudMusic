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
