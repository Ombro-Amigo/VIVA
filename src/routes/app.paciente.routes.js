import React from 'react';
import HomePaciente from '../pages/paciente/HomePaciente';
import Agendamento1 from '../pages/paciente/Agendamento1';
import Agendamento2 from '../pages/paciente/Agendamento2';

import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

const AppStack = createStackNavigator();

function LogoTitle() {
   return (
      <Image

         style={{ width: 50, height: 50, aspectRatio: 1 }}
         source={require('../../assets/icon/logo_header.png')}
      />
   );
}

const AppPacienteRoutes = () => (
   <AppStack.Navigator 
      initialRouteName='Encaminhamento'
      screenOptions={{
         headerTitleAlign: 'center',
         headerTitle: props => <LogoTitle {...props} />
      }}
   >
      <AppStack.Screen name='HomePaciente' component={HomePaciente} />
      <AppStack.Screen name='Agendamento1' component={Agendamento1} />
      <AppStack.Screen name='Agendamento2' component={Agendamento2} />
   </AppStack.Navigator>
)

export default AppPacienteRoutes;
