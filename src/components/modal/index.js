import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default class UserModal extends React.Component {
  state = {
    userLevel: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Meus dados pessoais</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
