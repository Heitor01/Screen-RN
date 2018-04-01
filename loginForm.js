import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {
	render() {
		return (
		<View style={styles.container}>
		   <TextInput placeholder="Login" style={styles.input}
		   />
		   <TextInput placeholder="Password" style={styles.input}
		   />
		   <TouchableOpacity style={styles.botao}>
		   <Text style={styles.buttonText}>Login</Text>
		   </TouchableOpacity>
		</View>
		);
	}
}

const styles = StyleSheet.create({

container: {
  padding: 20
},

input: {
  backgroundColor: 'white',
  marginBottom: 20,
  fontSize: 25,
  color: 'black'
},

botao: {
  backgroundColor: 'red'
},

buttonText: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 30,
  paddingVertical: 10,
  textAlign: 'center'
},
	
});