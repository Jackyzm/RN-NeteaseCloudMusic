import { AsyncStorage } from 'react-native';

async function setData({ key, value }) {
    return await AsyncStorage.setItem(key, value)
        .then((res) => {
            if (res !== null) {
                return res;
            }
            return Promise.reject();
        })
        .catch(() => Promise.reject());
}

async function getData(key) {
    return await AsyncStorage.getItem(key)
        .then((res) => {
            if (res !== null) {
                return res;
            }
            return Promise.reject();
        })
        .catch(() => Promise.reject());
}

const Storages = {
    setData,
    getData,
};

export default Storages;
