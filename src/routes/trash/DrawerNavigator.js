import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackGeral, StackPaciente } from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
   return(
      <Drawer.Navigator>
         <Drawer.Screen name='Encaminhamento' component={StackGeral}/>
         <Drawer.Screen name='Chat' component={StackGeral}/>
         <Drawer.Screen name='LoginPaciente' component={StackPaciente}/>
      </Drawer.Navigator>
   );
}

export default DrawerNavigator;