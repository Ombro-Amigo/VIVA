import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

// import { StackGeral, StackPaciente } from './trash/StackNavigator';
import AppPsicologoRoutes from './app.psicologo.routes';
import configRoutes from './drawer.stacks.routes/drawer.config.routes';
import editaInfoRoutes from './drawer.stacks.routes/drawer.editInfo.routes';
import saibaMaisRoutes from './drawer.stacks.routes/drawer.saibaMais.routes';
import DrawerCustom from './DrawerCustom';

const Drawer = createDrawerNavigator();

const DrawerNavigatorPsicologo = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Home'
			drawerPosition='right'
			drawerStyle={{ width: '85%' }}
			drawerContent={props => <DrawerCustom {...props} />}
		>
			<Drawer.Screen
				name='Home'
				component={AppPsicologoRoutes}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name='Alterar informações da conta'
				component={editaInfoRoutes}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name='Configurações do aplicativo'
				component={configRoutes}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name='Saiba mais sobre nós'
				component={saibaMaisRoutes}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigatorPsicologo;
