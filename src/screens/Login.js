import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TextInput, Button, Checkbox } from 'react-native-paper'


export class Login extends Component {
  static navigationOptions = {
      title: 'Login'
  }

  state = {
    email: '',
    passwd: '',
    checked: false,
  }

  render() {
    const { checked } = this.state;
    return (
      <View styles={{flex: 1}}>
          <Text style={styles.introText}> Billy da Tapioca </Text>

        <View styles={{flex: styles.box}}>
          <TextInput 
            label='Digite o email de cadastro'
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            mode='outlined'
            style={{margin: 15}}
          />

          <TextInput 
            label='Digite sua senha'
            value={this.state.passwd}
            onChangeText={text => this.setState({ passwd: text })}
            mode='outlined'
            style={{margin: 15}}
            secureTextEntry={true}
          />
          
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', margin: 15}}>
            <Checkbox 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: !checked }); }}
            />
            <Text style={{textAlign: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 12}}> Salvar </Text>
          </View>

        </View>


          <Button
            onPress={() => {
    
            }}
            mode='contained'
            style={{padding: 10, marginHorizontal: 15, marginVertical: 50}}
          >
            Login
          </Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  box: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  introText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    padding: 15,
    color: 'brown',
    fontWeight: 'bold'
  },
})


export default Login
