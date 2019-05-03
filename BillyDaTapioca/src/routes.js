import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from ".";
import ListaItensPage from "./pages/listaItens";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    ListaItens: { screen: ListaItensPage }
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
