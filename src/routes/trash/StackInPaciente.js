import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PrimeiroContato from '../pages/paciente/PrimeiroContato';
import HomePaciente from '../pages/paciente/HomePaciente';
import Agendamento1 from '../pages/paciente/Agendamento1';
import Agendamento2 from '../pages/paciente/Agendamento2';

const Stack = createStackNavigator();

const StackOut = () => {
   return(
      <Stack.Navigator>
         <Stack.Screen name='PrimeiroContato' component={PrimeiroContato} />

         <Stack.Screen name='HomePaciente' component={HomePaciente} />
         <Stack.Screen name='Agendamento1' component={Agendamento1} />
         <Stack.Screen name='Agendamento2' component={Agendamento2} />
      </Stack.Navigator>
   );
}

export { StackOut };