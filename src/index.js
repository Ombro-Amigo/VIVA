import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AuthProvider } from './contexts/auth/auth';
import { LoginProvider } from './contexts/auth/login';
import { StatesProvider } from './contexts/states';
// import { FontProvider } from './src/contexts/styles/styles';

import Routes from './routes';
import { store, persistor } from './store';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
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
			</PersistGate>
		</Provider>
		// <Text>Teste</Text>
	);
}

export default App;
