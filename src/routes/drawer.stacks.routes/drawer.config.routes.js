import React from 'react';
import Configuracoes from '../../pages/drawer/Configuracoes';

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

const configRoutes = () => (
   <AppStack.Navigator 
      initialRouteName='HomePaciente'
      screenOptions={{
         headerTitleAlign: 'center',
         headerTitle: props => <LogoTitle {...props} />
      }}
   >
      <AppStack.Screen name='Configuracoes' component={Configuracoes} />
   </AppStack.Navigator>
)

export default configRoutes;
