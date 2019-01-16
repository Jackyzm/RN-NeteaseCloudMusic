import { AsyncStorage } from 'react-native';

async function setItem(key, value) {
    return await AsyncStorage.setItem(key, value)
        .then(res => Promise.resolve(res))
        .catch(() => Promise.reject());
}

async function getItem(key) {
    return await AsyncStorage.getItem(key)
        .then(res => {
            if (res !== null) {
                return Promise.resolve(res);
            }
            return Promise.reject();
        })
        .catch(() => Promise.reject());
}

async function removeItem(key) {
    return await AsyncStorage.removeItem(key)
        .then(res => Promise.resolve(res))
        .catch(() => Promise.reject());
}

async function mergeItem(key, value) {
    return await AsyncStorage.mergeItem(key, value)
        .then(res => Promise.resolve(res))
        .catch(() => Promise.reject());
}

const myStorage = {
    setItem,
    getItem,
    removeItem,
    mergeItem,
};

export default myStorage;
