import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';

import Targeting from './src/pages/Targeting';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, aspectRatio: 1 }}
      source={require('./assets/logo_header.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerTitleAlign: 'center'
          }
        }
      >
        <Stack.Screen
          name='Targeting'
          component={Targeting}
          options={{ headerTitle: props => <LogoTitle {...props} />}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}