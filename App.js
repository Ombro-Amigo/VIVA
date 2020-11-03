import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginProvider } from './src/contexts/auth/login';
import { AuthProvider } from './src/contexts/auth/auth';
// import { FontProvider } from './src/contexts/styles/styles';

import Routes from './src/routes/';
import { Text, View } from 'react-native';


function App() {
   return (
      <NavigationContainer>
         <AuthProvider>
            <LoginProvider>
               <PaperProvider>
                  {/* <FontProvider> */}
                     <Routes />
                  {/* </FontProvider> */}
               </PaperProvider>
            </LoginProvider>
         </AuthProvider>
      </NavigationContainer>
      // <Text>Teste</Text>
   );
}

export default App;
