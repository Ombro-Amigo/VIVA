import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginProvider } from './contexts/auth/login';
import { AuthProvider } from './contexts/auth/auth';
import { StatesProvider } from './contexts/states';
// import { FontProvider } from './src/contexts/styles/styles';

import Routes from './routes/';
import { Text, View } from 'react-native';


function App() {
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
}

export default App;