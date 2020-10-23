import React from 'react';
import HomePsicologo from '../pages/psicologo/HomePsicologo';

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
      <AppStack.Screen name='HomePsicologo' component={HomePsicologo} />
   </AppStack.Navigator>
)

export default AppPacienteRoutes;
