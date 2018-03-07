
const users = {
	4: { name: 'VR' },
	5: { name: 'AR' },
}

export default function request(url) {
	return new Promise((resolve, reject) => {
		const userID = parseInt(url.substr('/users/'.length));
		process.nextTick(() => {
			return users[userID] ? resolve(users[userID]) : reject({ error: `userID ${userID} not found` });
		});
	})
}