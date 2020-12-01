import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import CadastroPaciente1 from '../pages/Auth/CadastroPaciente1';
import CadastroPaciente2 from '../pages/Auth/CadastroPaciente2';
import CadastroPsicologo1 from '../pages/Auth/CadastroPsicologo1';
import CadastroPsicologo2 from '../pages/Auth/CadastroPsicologo2';
import ConfirmacaoCrp from '../pages/Auth/ConfirmacaoCrp';
import LoginPaciente from '../pages/Auth/LoginPaciente';
import LoginPsicologo from '../pages/Auth/LoginPsicologo';
import Encaminhamento from '../pages/Private/Geral/Encaminhamento';

const AuthStack = createStackNavigator();

function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50, aspectRatio: 1 }}
			source={require('../assets/icon/logo_header.png')}
		/>
	);
}

const AuthRoutes = () => (
	<AuthStack.Navigator
		initialRouteName='Encaminhamento'
		screenOptions={{
			headerTitleAlign: 'center',
			headerTitle: props => <LogoTitle {...props} />,
		}}
	>
		<AuthStack.Screen name='Encaminhamento' component={Encaminhamento} />

		<AuthStack.Screen name='LoginPaciente' component={LoginPaciente} />
		<AuthStack.Screen
			name='CadastroPaciente1'
			component={CadastroPaciente1}
		/>
		<AuthStack.Screen
			name='CadastroPaciente2'
			component={CadastroPaciente2}
		/>

		<AuthStack.Screen name='LoginPsicologo' component={LoginPsicologo} />
		<AuthStack.Screen
			name='CadastroPsicologo1'
			component={CadastroPsicologo1}
		/>
		<AuthStack.Screen
			name='CadastroPsicologo2'
			component={CadastroPsicologo2}
		/>
		<AuthStack.Screen name='ConfirmacaoCrp' component={ConfirmacaoCrp} />
	</AuthStack.Navigator>
);

export default AuthRoutes;
