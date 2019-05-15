import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'brown',
    accent: 'red',
    background: '#f8f9f9',
    disabled: '#a6acaf',
  },
};

export default theme;
