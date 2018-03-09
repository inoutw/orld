
import React from 'react';
import renderer from 'react-test-renderer';
import Touchable from '../Touchable';

jest.mock('TouchableWithoutFeedback', () => {
	const mockComponent = require('jest-react-native');
	return mockComponent('TouchableWithoutFeedback');
});
it('handle press on Touchable', () => {
	const comp = renderer.create(<Touchable />);
	let tree = comp.getInstance();
	tree.onRowPress()
})