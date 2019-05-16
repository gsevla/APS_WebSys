import { createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Bebidas from "../screens/Bebidas";
import Tapiocas from "../screens/Tapiocas";
import Compras from "../screens/Compras";

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        title: "Tela inicial"
      };
    }
  },
  Bebidas: Bebidas,
  Tapiocas: Tapiocas,
  Compras: Compras
});

export default RootStack;
