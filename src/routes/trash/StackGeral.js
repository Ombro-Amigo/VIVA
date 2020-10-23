import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Imports telas gerais
import Encaminhamento from '../pages/geral/Encaminhamento';
import Chat from '../pages/geral/Chat';
import Chamada from '../pages/geral/Chamada';

const Stack = createStackNavigator();

export default function StackGeral() {
   return(
      <Stack.Navigator>
         <Stack.Screen name='Encaminhamento' component={Encaminhamento} />
         <Stack.Screen name='Chat' component={Chat} />
         <Stack.Screen name='Chamada' component={Chamada} />
      </Stack.Navigator>
   );
}
