import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

// import { StackGeral, StackPaciente } from './trash/StackNavigator';
import AppPacienteRoutes from './app.paciente.routes';
import editaInfoRoutes from './drawer.stacks.routes/drawer.editInfo.routes';
import configRoutes from './drawer.stacks.routes/drawer.config.routes';
import saibaMaisRoutes from './drawer.stacks.routes/drawer.saibaMais.routes';

import DrawerCustom from './DrawerCustom'

const Drawer = createDrawerNavigator();

const DrawerNavigatorPaciente = () => {
   return(
      <Drawer.Navigator
         initialRouteName='Home'
         drawerPosition='right'
         drawerContent={props => <DrawerCustom {...props}/>}
      >
         <Drawer.Screen name='Home' component={AppPacienteRoutes}/>
         <Drawer.Screen name='Alterar informações da conta' component={editaInfoRoutes}/>
         <Drawer.Screen name='Configurações do aplicativo' component={configRoutes}/>
         <Drawer.Screen name='Saiba mais sobre nós' component={saibaMaisRoutes}/>
      </Drawer.Navigator>
   );
}

export default DrawerNavigatorPaciente;