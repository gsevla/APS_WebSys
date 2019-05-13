import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ListaTapiocas from '../listaItens/tapiocas'
import ListaBebidas from '../listaItens/bebidas'
import ListaCompras from '../listaItens/compras'


const BottomNavigator = createMaterialBottomTabNavigator(
  {
  Tapiocas: {screen: ListaTapiocas },
  Bebidas: { screen: ListaBebidas },
  Compras: { screen: ListaCompras }
  },
  {
    initialRouteName: 'Tapiocas'
  }
);

export default BottomNavigator;