import { http } from '../services';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
export async function cache(req, cb) {
	if (typeof req === "string") {
		req = { url: req };
	}
	try {
		let { url, params = {} } = req;
		let key = url + "?" + qs.stringify(params);
		let data = await AsyncStorage.getItem(key);
		if (data) {
			cb(JSON.parse(data));
		}
		http(req).then(async (res) => {
			await AsyncStorage.setItem(key, JSON.stringify(res));
			cb(res);
		});
	} catch (err) {
		console.warn('err', err);
	}
}

export default async function cache2(req, cb) {
	if (typeof req === "string") {
		req = { url: req };
	}

	let { url, params = {} } = req;
	let key = url + "?" + qs.stringify(params);
	let data = await AsyncStorage.getItem(key);
	if (data) {

		cb(JSON.parse(data), 'fromcache');
	}
	let res = await http(req);
	await AsyncStorage.setItem(key, JSON.stringify(res));
	cb(res, 'fromhttp');
}