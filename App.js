import React,{Component} from 'react';
import {View,Text} from 'react-native';
//import { Icon } from 'react-native-elements';
//import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
export default class App extends Component{
  render(){
    return(
      <View>
        <Icon name="md-menu"size={32}/>
        <Text>hiiiiiii</Text>
      </View>
    
    );
  }
}