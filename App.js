import { createAppContainer } from 'react-navigation';
import RootStack from './src/routes/RootStack';

global.user = {
    isLogged: false,
    user: '',
    userId: null
}

export default createAppContainer(RootStack);
