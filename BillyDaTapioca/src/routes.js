import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from ".";


const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "#000"
    }
  }
);

export default createAppContainer(AppNavigator);
