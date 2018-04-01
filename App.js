import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ToolbarAndroid, TextInput, TouchableOpacity,  } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import Icon from 'react-native-vector-icons/Entypo'; // 4.5.0
import Icon1 from 'react-native-vector-icons/MaterialIcons'; // 4.5.0

export default class Login extends Component {
	constructor() {
		super()
		function fontSizer (screenWidth) {
  if(screenWidth > 400){
    return 18;
  }else if(screenWidth > 250){
    return 14;
  }else { 
    return 12;
  }
}
	}
  render() {
    return (
		<View style={styles.container}>
		  <View style={{justifyContent: 'center', alignItems: 'center'}}>
		    <ResponsiveImage source={require('./mercadolivre.png')} initHeight='180' initWidth='260' style={{marginTop: 10}} />
		  </View>
		  <View>
		    <Text style={styles.change}>Escolha uma conta:</Text>
		  </View>
		  <View>
		  <TouchableOpacity>
		  <Text style={{fontSize: 22, color: '#535353', fontWeight: 'bold', marginLeft: 15}}>Gonçalves & Camargos</Text>
		  <Icon name="chevron-small-right" size={40} style={{marginLeft: 300, marginTop: -30, color: 'grey'}} />
		  		  <Text style={{fontSize: 16, marginTop: -10, marginLeft: 16, color: '#a6a6a6'}}>Secondary text</Text>
		  </TouchableOpacity>
		  </View>
		  <View style={styles.email}>
		  <TouchableOpacity>
		  <Text style={{fontSize: 22, color: '#535353', fontWeight: 'bold', marginLeft: 15}}>Gonçalves & Camargos</Text>
		  <Icon name="chevron-small-right" size={40} style={{marginLeft: 300, marginTop: -30, color: 'grey'}} />
		  		  <Text style={{fontSize: 16, marginTop: -10, marginLeft: 16, color: '#a6a6a6'}}>Secondary text</Text>
		  </TouchableOpacity>
		  <View style={{height: '30%'}}>
		  <TouchableOpacity style={{backgroundColor: '#f5f5f5', marginTop: 20, height: 70,justifyContent: 'center',}}>
		  <Text style={{fontSize: 25, textAlign: 'center', color: '#4c4c4c', justifyContent: 'center'}}>Gerenciar contas</Text>
		  </TouchableOpacity>
		  </View>
		  </View>
		  
		  
		</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
    },
	
	change: {
		fontSize:fontsizer(30),
		textAlign: 'center',
		padding: 30,
		color: '#ef6c00',
		fontWeight: 'bold'
	},
	
	email: {
		paddingTop: 20,
		marginTop: 20,
		borderTopWidth: 1,
		borderColor: '#dddddd'
	},
	
	gerenciar: {
		backgroundColor: 'black',
		paddingTop: 30,
		marginTop: 30,
	},
});