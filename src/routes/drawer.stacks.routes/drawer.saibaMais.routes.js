import React from 'react';
import SaibaMais from '../../pages/drawer/SaibaMais';

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

const saibaMaisRoutes = () => (
   <AppStack.Navigator 
      initialRouteName='HomePaciente'
      screenOptions={{
         headerTitleAlign: 'center',
         headerTitle: props => <LogoTitle {...props} />
      }}
   >
      <AppStack.Screen name='SaibaMais' component={SaibaMais} />
   </AppStack.Navigator>
)

export default saibaMaisRoutes;
