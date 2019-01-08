import request from '../request';

export async function _getPersonalized() {
    return await request('/personalized');
}

export async function postHirePersonAvatar(params) {
    return await request('/api/hr/hirePerson/upload', {
        method: 'POST',
        body: params
    });
}
