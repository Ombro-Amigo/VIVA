import React from 'react';
import EditarInfo from '../../pages/drawer/EditarInfo';

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

const editaInfoRoutes = () => (
   <AppStack.Navigator 
      initialRouteName='HomePaciente'
      screenOptions={{
         headerTitleAlign: 'center',
         headerTitle: props => <LogoTitle {...props} />
      }}
   >
      <AppStack.Screen name='EditarInfo' component={EditarInfo} />
   </AppStack.Navigator>
)

export default editaInfoRoutes;
