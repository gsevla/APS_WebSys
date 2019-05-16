import { createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import Bebidas from "../screens/Bebidas";
import Tapiocas from "../screens/Tapiocas";
import Compras from "../screens/Compras";
import Carrinho from "../screens/Carrinho";
import Login from "../screens/Login";
import Modal from "../components/modal";

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
  Compras: Compras,
  Carrinho: Carrinho,
  Modal: Modal,
  Login: Login,
});

export default RootStack;
