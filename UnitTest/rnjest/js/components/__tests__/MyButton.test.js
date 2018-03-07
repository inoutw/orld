import React from 'react';
import renderer from 'react-test-renderer';
import MyButton from '../MyButton';

// https://github.com/facebook/jest/issues/1720#issuecomment-247746586
// jest.mock('Button', () => {
// 	const mockComponent = require('jest-react-native');
// 	return mockComponent('Button');
// });
jest.mock('Button', () => 'Button');

it('change button color', () => {
	const comp = renderer.create(
		<MyButton/>
	)
	let tree = comp.toJSON();
	// console.log('tree props', tree);
	expect(tree).toMatchSnapshot();

	// trigger the component method 
	tree.props.onMouseEnter();
	tree = comp.toJSON();
	expect(tree).toMatchSnapshot();

	tree.props.onMouseLeave();
	tree = comp.toJSON();
	expect(tree).toMatchSnapshot();	
})

it('should trigger the onPress handler', () => {
	let mockPress = jest.fn();
	const comp = renderer.create(
		<MyButton onPress={mockPress}/>
	)
	comp.toJSON().props.onPress();
	expect(mockPress).toBeCalled();
})