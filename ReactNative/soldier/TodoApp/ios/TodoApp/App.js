/**
 * Created by qinai on 9/27/16.
 */
import React, { Component } from 'react';
import {View} from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <View>
                <AddTodo
                    onAddClick={text =>
            console.log('add todo', text)
          } />
                <TodoList
                    todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
                    onTodoClick={todo =>
            console.log('todo clicked', todo)
          } />
                <Footer
                    filter='SHOW_ALL'
                    onFilterChange={filter =>
            console.log('filter change', filter)
          } />
            </View>
        );
    }
}