/**
 * Created by qinai on 8/9/16.
 */
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, ScrollView, Image, ListView, Navigator } from 'react-native';

import NavigationApp from './NavigationApp';
import AnimatedApp from './AnimatedApp';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(() => {this.setState({showText: !this.state.showText})}, 1000);
  }
  render(){
    let display = this.state.showText? this.props.text:'';
    return (<Text>{display}</Text>);
  }
}
const styles = StyleSheet.create({
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:20
  },
  red:{
    color:'red'
  }
});
class PizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
    }
    render(){
        return (<View style={{padding:10}}>
            <TextInput style={{height:40}}
                       placeholder="type here to translate!"
                       onChangeText={(text)=>this.setState({text})} />
            <Text style={{padding:10, fontSize:22, backgroundColor: '#eee',}}>
                {this.state.text.split(' ').map((word)=>word && '*').join(' ')}
            </Text>
        </View>);
    }
}
//TBD:test in phone the scroll function
class TestScrollView extends Component{
    render(){
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me please</Text>
                <Image source={require('./images/fighting.jpg')}/>
                <Image source={require('./images/meme.jpg')}/>
            </ScrollView>
        );
    }
}
class ListViewBasics extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows([
                'John', 'Joel', 'James','Jimmy','Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render(){
        return (
            <View style={{paddingTop: 22}}>
                <ListView dataSource={this.state.dataSource}
                          renderRow = {(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
    }
}

class BlinkApp extends Component{
  render(){
    return (
        <View>
            
            <NavigationApp/>
            <ListViewBasics/>
            <PizzaTranslator/>
          <View style={{height:100, flexDirection: 'row',}}>
            <View style={{flex:1, backgroundColor: 'skyblue'}}/>
            <View style={{flex:2, backgroundColor: 'steelblue'}}/>
            <View style={{flex:3, backgroundColor: 'blue'}}/>
          </View>
          <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-around',}}>
              <View style={{width: 50, height: 50, backgroundColor: 'black'}}/>
              <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
              <View style={{width: 50, height: 50, backgroundColor: 'red'}}/>
          </View>
            <View style={{flex: 1, flexDirection:'column', justifyContent: 'space-around',alignItems:'stretch'}}>
                <View style={{height: 50, backgroundColor: 'black'}}/>
                <View style={{height: 50, backgroundColor: 'blue'}}/>
                <View style={{height: 50, backgroundColor: 'red'}}/>
            </View>
          <Text style={styles.red}>Only core component support the style prop?</Text>
          <Text style={styles.bigBlue}>How Could extended component support the style?</Text>
          <Blink text='I love react native' style={styles.red}/>
          <Blink text='can you see me?'/>
            <AnimatedApp/>
        </View>
    );
  }
}
AppRegistry.registerComponent('BlinkApp', ()=>BlinkApp);