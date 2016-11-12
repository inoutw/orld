/**
 * Created by qinai on 9/27/16.
 */
import React, { findDOMNode, Component, PropTypes } from 'react';
import {View, TouchableHighlight, TextInput } from 'react-native';

export default class AddTodo extends Component {
    render() {
        return (
            <View>
                <TextInput type='text' ref='input' />
                <TouchableHighlight onClick={e => this.handleClick(e)}>
                    Add
                </TouchableHighlight>
            </View>
        );
    }

    handleClick(e) {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}