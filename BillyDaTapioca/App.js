import React, {Component} from 'react';
import { DefaultTheme ,Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from "react-navigation";
import AppNavigator from "./src/routes";
import navigationService from "./src/services/navigationService";
import ListaItensPage from './src/pages/listaItens';
import HomePage from './src';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    background: '#C0C0C0',
    disabled: '#A9A9A9'
  },
};

class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
          {/* <AppContainer
            ref={navigatorRef => {
              navigationService.setTopLevelNavigator(navigatorRef);
            }}
          /> */}
          <HomePage />
      </PaperProvider>
    );
  }
}

// const AppContainer = createAppContainer(AppNavigator);

export default App;