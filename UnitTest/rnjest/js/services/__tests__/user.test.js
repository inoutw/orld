
import * as user from '../user';

jest.mock('../request');

// expect.assertions(1); Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test
// make sure that assertions in a callback actually got called.

it('works with promise', () => {
	expect.assertions(1);
	return user.getUsername(4).then(data => expect(data).toBe('VR'))
})

it('works with resolves', () => {
	expect.assertions(1);
	return expect(user.getUsername(5)).resolves.toEqual('AR');
});

it('works with async/await', async () => {
	expect.assertions(1);
	const data = await user.getUsername(4);
	expect(data).toEqual('VR');
});

it('works with async/await and resolves', async () => {
	expect.assertions(1);
	await expect(user.getUsername(5)).resolves.toEqual('AR');
});


// -test error-------------------
it('tests error with promises', async () => {
	expect.assertions(1);
	return user.getUsername(2).catch(e =>
		expect(e).toEqual({
			error: 'userID 2 not found',
		})
	);
});

it('tests error with rejects', () => {
	expect.assertions(1);
	return expect(user.getUsername(3)).rejects.toEqual({
		error: 'userID 3 not found',
	});
});

it('tests error with async/await', async () => {
	expect.assertions(1);
	try {
		await user.getUsername(1);
	} catch (e) {
		expect(e).toEqual({
			error: 'userID 1 not found',
		});
	}
});

it('tests error with async/await and rejects', async () => {
	expect.assertions(1);
	await expect(user.getUsername(3)).rejects.toEqual({
		error: 'userID 3 not found',
	});
});