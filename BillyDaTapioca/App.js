import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer } from "react-navigation";
import AppNavigator from "./src/routes";
import navigationService from "./src/services/navigationService";


class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <AppContainer
            ref={navigatorRef => {
              navigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
    );
  }
}

const AppContainer = createAppContainer(AppNavigator);

export default App;