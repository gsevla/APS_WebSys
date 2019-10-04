/**
 * @format
 */
// required imports
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import theme from './src/Theme';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
