import React, { Component } from 'react';

import Home from './src/Home/Home';
import containers from './src/estilos/estilo';









/* createNativeStackNavigator é uma função que retorna um objeto contendo 2 propriedades: 
        Screen e Navigator. 
 * Ambos são componentes React usados ​​para configurar o navegador. 
 * O Navigatordeve conter Screenelementos como seus filhos para definir a configuração das rotas.
 */


// observe que dentro da função App temos os componentes  <Stack.Screen/> </Stack.Navigator>  que o que rtornou nossa função  createNativeStackNavigator();
// e esse retorno foi atribuido a nossa const Stack, por isso a chamada do componente  dentro do NavigationCaontainer ficou stack.navigation e stack.screen
class App extends Component {
  render() {
    return (
      
    <Home></Home>

        )
  }
}

        export default App;