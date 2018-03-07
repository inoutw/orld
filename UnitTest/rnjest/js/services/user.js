import request from './request';



export function getUsername(userID) {
	return request('/users/' + userID).then((user) => user.name);
}