/**
 * Created by qinai on 8/14/16.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';


export default class NavigationApp extends Component{
    render(){
        return (
            <Navigator
                initialRoute = {{title:'My initial Scene', index: 0}}
                renderScene={(route, navigator)=>
                    <MyScene
                        title={route.title}

                        //function to call when load a new scene
                         onForward = { ()=>{
                            const nextIndex = route.index+1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index:nextIndex,
                            });
                         }}
                         onBack={()=>{
                            if(route.index>0){
                                navigator.pop();
                            }
                         }}
                    />
                }
            />
        )
    }
}


class MyScene extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    render(){
        return (
            <View style={{marginTop: 20, marginBottom: 20,backgroundColor:'green'}}>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Load next Scene</Text>

                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Go back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}



