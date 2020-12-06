import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import Chat from '../pages/Private/Geral/Chat';
import HomePsicologo from '../pages/Private/Psicologo/HomePsicologo';

const AppStack = createStackNavigator();

function LogoTitle() {
	return (
		<Image
			style={{ width: 50, height: 50, aspectRatio: 1 }}
			source={require('../assets/icon/logo_header.png')}
		/>
	);
}

const AppPsicologoRoutes = ({ navigation }) => (
	<AppStack.Navigator
		initialRouteName='HomePsicologo'
		screenOptions={{
			headerTitleAlign: 'center',
			headerTitle: props => <LogoTitle {...props} />,
		}}
	>
		<AppStack.Screen
			name='HomePsicologo'
			component={HomePsicologo}
			options={{
				headerRight: () => (
					<TouchableRipple onPress={() => navigation.openDrawer()}>
						<Image
							style={{
								width: 25,
								height: 25,
								aspectRatio: 1,
								marginRight: 15,
							}}
							source={require('../assets/icon/menu.png')}
						/>
					</TouchableRipple>
				),
			}}
		/>
		<AppStack.Screen name='Chat' component={Chat} />
	</AppStack.Navigator>
);

export default AppPsicologoRoutes;
