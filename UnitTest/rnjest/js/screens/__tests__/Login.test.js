// https://medium.com/@jigishchawda/we-will-be-writing-unit-tests-for-the-above-mentioned-login-component-9e02002e7ff8

import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../Login';

it('should change the password value', () => {
	let loginComp = renderer.create(<Login />).getInstance();
	loginComp.handlePasswordChange('p123456');
	expect(loginComp.state.password).toBe('p123456');
})

it('should handle login press', () => {
	let handleLoginMock = jest.fn();
	let loginComp = renderer.create(<Login handleLogin={handleLoginMock}/>).getInstance();
	loginComp.handleLoginPress();
	expect(handleLoginMock).toBeCalled();
})