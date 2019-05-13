import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from ".";
import BottomNavigator from "./components/bottomNavigator";
import UserModal from "./components/modal";


const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Tabs: { screen: BottomNavigator, navigationOptions: { title: 'Header title' }, },
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
