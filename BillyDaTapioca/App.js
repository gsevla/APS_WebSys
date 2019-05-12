import React, {Component} from 'react';
import { DefaultTheme ,Provider as PaperProvider, Portal, Modal, Text } from 'react-native-paper';
import AppNavigator from "./src/routes";
import { Provider as StoreProvider } from 'react-redux';
import store from './src/services/redux/store';
import UserModal from './src/components/modal';



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
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <UserModal />
          <AppNavigator />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

export default App;