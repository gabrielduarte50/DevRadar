import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer( // chamamos as rotas da aplicaçao
    createStackNavigator({
        Main:{
            screen: Main, //o que rendereizamos
            navigationOptions:  {
                title:'DevRadar'
            },
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: 'PERFIL NO GITHUB'
            },
        },
    },{
        defaultNavigationOptions:{ ///para todasd as telas
            headerTintColor: '#FFF',
            headerStyle:{
                backgroundColor: '#7d40e7',

            },
        },
    })
);
// esse arquivo ja cria alguns dados na tela do smartphone
//podemos usar o objeto criado e modificar algumas coisas 
export default Routes;