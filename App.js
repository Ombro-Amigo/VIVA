import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { LoginProvider } from './src/contexts/auth/login';
import { CadProvider } from './src/contexts/auth/cadastro';
import { FontProvider } from './src/contexts/styles/styles';

import Routes from './src/routes/';


function App() {
   return (
      <NavigationContainer>
         <CadProvider>
            <LoginProvider>
               <FontProvider>
                  <Routes />
               </FontProvider>
            </LoginProvider>
         </CadProvider>
      </NavigationContainer>
   );
}

export default App;
