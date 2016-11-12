/**
 * Created by qinai on 9/27/16.
 */
import React, { Component, PropTypes } from 'react';
import {View, ListView} from 'react-native';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        return (
            <View>
                <ListView>
                    {this.props.todos.map((todo, index) =>
                        <Todo {...todo}
                            key={index}
                            onClick={() => this.props.onTodoClick(index)} />
                    )}
                </ListView>
            </View>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}