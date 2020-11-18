import React from 'react';
import MenuSaibaMais from '../../pages/drawer/MenuSaibaMais';

import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const AppStack = createStackNavigator();

function LogoTitle() {
   return (
      <Image

         style={{ width: 50, height: 50, aspectRatio: 1 }}
         source={require('../../assets/icon/logo_header.png')}
      />
   );
}

const saibaMaisRoutes = ({ navigation }) => (
   <AppStack.Navigator
      initialRouteName='HomePaciente'
      screenOptions={{
         headerTitleAlign: 'center',
         headerTitle: props => <LogoTitle {...props} />
      }}
   >
      <AppStack.Screen name='SaibaMais' component={MenuSaibaMais}
         options={{
            headerRight: () => (
               <TouchableRipple onPress={() => navigation.openDrawer()}>
                  <Image
                  style={{width: 25, height: 25, aspectRatio: 1, marginRight: 15}}
                  source={require('../../assets/icon/menu.png')}/>
               </TouchableRipple>
            )
         }}
      />
   </AppStack.Navigator>
)

export default saibaMaisRoutes;
