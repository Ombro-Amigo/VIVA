import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { LoginProvider } from './contexts/auth/login';
import { AuthProvider } from './contexts/auth/auth';
import { StatesProvider } from './contexts/states';
// import { FontProvider } from './src/contexts/styles/styles';

import Routes from './routes';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AuthProvider>
					<LoginProvider>
						<StatesProvider>
							<PaperProvider>
								<Routes />
							</PaperProvider>
						</StatesProvider>
					</LoginProvider>
				</AuthProvider>
			</NavigationContainer>
		</Provider>
		// <Text>Teste</Text>
	);
}

export default App;
