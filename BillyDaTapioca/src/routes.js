import { createStackNavigator } from "react-navigation";
import ListaItensPage from "./pages/listaItens";

const AppNavigator = createStackNavigator(
  {
    ListaItens: { screen: ListaItensPage }
  },
  {
    initialRouteName: "ListaItens",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "#000"
    }
  }
);

export default AppNavigator;
