import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    View,
    Text,
    TextInput
} from 'react-native';

import BlurOnSubmitExample from './ios/ToolTipDemo/textinputdemo';

var ToolTip = require('react-native-tooltip');
var ToolTipDemo = React.createClass({
  getInitialState: function() {
    return {
      input: 'chirag'
    }
  },

  render: function() {
    return (
        <View style={styles.container}>
          <BlurOnSubmitExample />
          <View style={styles.textinputContainer}>
            <ToolTip
                ref='theToolTip'
                actions={[
              {text: 'x', onPress: () => { this.setState({input: 'y pressed'}) }},
              {text: 'y', onPress: () => { this.setState({input: 'y pressed'}) }}
            ]}
                underlayColor='transparent'
                style={styles.textinput}
                arrowDirection='down'
            >
                <Text>
                  {this.state.input}
                </Text>
            </ToolTip>
          </View>
        </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textinputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: 60,
    marginVertical: 2,
    marginHorizontal: 2,
    borderWidth: 1 / PixelRatio.get(),
    borderRadius: 5,
    borderColor: '#c7c7cc',
    padding: 2,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('ToolTipDemo', () => ToolTipDemo);