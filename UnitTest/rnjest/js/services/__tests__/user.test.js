
import * as user from '../user';

jest.mock('../request');

it('works with promise', () => {
	// expect.assertions(1);
	return user.getUsername(4).then(data => expect(data).toBe('VR'))
})