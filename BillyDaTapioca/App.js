import React, {Component} from 'react';
import { DefaultTheme ,Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from "./src/routes";


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'brown',
    accent: 'yellow',
    background: '#f8f9f9',
    disabled: '#a6acaf'
  },
};

class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
          <AppNavigator />
      </PaperProvider>
    );
  }
}

export default App;