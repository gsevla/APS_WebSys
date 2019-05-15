import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

export default class UserModal extends React.Component {
  static navigationOptions = {
    title: "Usuário"
  };

  state = {
    userLevel: 0
  };

  render() {
    if (this.state.userLevel == 0) {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text style={styles.introText}>Olá!</Text>
            <Text style={styles.infoText}>
              Verificamos que você não está logado, escolha uma das opções
              abaixo por favor:
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              onPress={() => {}}
              mode="contained"
              style={{ padding: 10, marginHorizontal: 15 }}
            >
              Registrar
            </Button>

            <Button
              onPress={() => {
                this.props.navigation.push("Login");
              }}
              mode="contained"
              style={{ padding: 10, marginHorizontal: 15 }}
            >
              Logar
            </Button>
          </View>
        </View>
      );
    } else if (this.state.userLevel == 1) {
      return (
        <View>
          <Text>
            retornar informações do usuário e fornecer opções de editar
            informações e logout
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>não sei o que teria aqui</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  introText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
    padding: 15,
    color: "brown",
    fontWeight: "bold"
  },
  infoText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16,
    color: "#A9A9A9"
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row"
  }
});
