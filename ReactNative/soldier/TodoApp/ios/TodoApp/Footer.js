/**
 * Created by qinai on 9/27/16.
 */
import React, { Component, PropTypes } from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <TouchableHighlight href='#' onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
                <Text>{name}</Text>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View>
                <Text>Show:</Text>
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </View>
        );
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

