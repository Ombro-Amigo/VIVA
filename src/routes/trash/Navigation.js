import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {StackOut} from './StackOut';

const Stack = createStackNavigator();

function LogoTitle() {
   return (
      <Image
         style={{ width: 50, height: 50, aspectRatio: 1 }}
         source={require('../../assets/icon/logo_header.png')}
      />
   );
}

export default function Navigation() {
   return(
      <NavigationContainer>
         <StackOut />
      </NavigationContainer>
   )
}
