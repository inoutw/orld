import React from 'react';
import renderer from 'react-test-renderer';
import MyButton from '../MyButton';

// https://github.com/facebook/jest/issues/1720#issuecomment-247746586
jest.mock('Button', () => {
	const mockComponent = require('jest-react-native');
	return mockComponent('Button');
});

it('button press', () => {
	const comp = renderer.create(
		<MyButton/>
	)
	let tree = comp.toJSON();
	expect(tree).toMatchSnapshot();
	console.log('tree props', tree.props);
})