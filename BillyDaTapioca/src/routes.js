import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from ".";


const TopLevelNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(TopLevelNavigator);

export default createAppContainer(AppContainer);
