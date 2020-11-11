import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { LoginProvider } from './contexts/auth/login';
import { AuthProvider } from './contexts/auth/auth';
<<<<<<< Updated upstream
import { StatesProvider } from './contexts/states';
// import { FontProvider } from './src/contexts/styles/styles';

import Routes from './routes/';
import { Text, View } from 'react-native';
=======
import store from './store';
>>>>>>> Stashed changes

import Routes from './routes';

function App() {
<<<<<<< Updated upstream
   return (
      <NavigationContainer>
         <AuthProvider>
            <LoginProvider>
               <StatesProvider>
                  <PaperProvider>
                     {/* <FontProvider> */}
                           <Routes />
                     {/* </FontProvider> */}
                  </PaperProvider>   
               </StatesProvider>
               
            </LoginProvider>
         </AuthProvider>
      </NavigationContainer>
      // <Text>Teste</Text>
   );
=======
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AuthProvider>
					<LoginProvider>
						<PaperProvider>
							<Routes />
						</PaperProvider>
					</LoginProvider>
				</AuthProvider>
			</NavigationContainer>
		</Provider>
		// <Text>Teste</Text>
	);
>>>>>>> Stashed changes
}

export default App;
