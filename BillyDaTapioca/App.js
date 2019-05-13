import React, {Component} from 'react';
import { DefaultTheme ,Provider as PaperProvider, Portal, Modal, Text } from 'react-native-paper';
import AppContainer from './src/routes';
import NavigationService from './src/services/navigationService';



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
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </PaperProvider>
    );
  }
}

export default App;