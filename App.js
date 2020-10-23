import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/contexts/auth';

import Routes from './src/routes/';


function App() {
   return (
      <NavigationContainer>
         <AuthProvider>
            <Routes />
         </AuthProvider>
      </NavigationContainer>
   );
}

export default App;
