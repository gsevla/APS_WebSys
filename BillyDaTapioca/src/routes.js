import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from ".";


const AppContainer = createStackNavigator(
  {
    Home: { screen: HomePage },
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppContainer);
