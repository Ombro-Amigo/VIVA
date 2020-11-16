import React from 'react';
import HomePaciente from '../pages/paciente/HomePaciente';
import Agendamento1 from '../pages/paciente/Agendamento1';
import Agendamento2 from '../pages/paciente/Agendamento2';

import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const AppStack = createStackNavigator();

function LogoTitle() {
   return (
      <Image
         style={{ width: 50, height: 50, aspectRatio: 1 }}
         source={require('../assets/icon/logo_header.png')}
      />
   );
}

const AppPacienteRoutes = ({ navigation }) => (
   <AppStack.Navigator
      initialRouteName='HomePaciente'
      screenOptions={{
         headerTitleAlign: 'center',
         headerTitle: props => <LogoTitle {...props} />
      }}
   >
      <AppStack.Screen name='HomePaciente' component={HomePaciente}
         options={{
            headerRight: () => (
               <TouchableRipple onPress={() => navigation.openDrawer()}>
                  <Image
                  style={{width: 25, height: 25, aspectRatio: 1, marginRight: 15}}
                  source={require('../assets/icon/menu.png')}/>
               </TouchableRipple>
            )
         }}
      />
      <AppStack.Screen name='Agendamento1' component={Agendamento1} />
      <AppStack.Screen name='Agendamento2' component={Agendamento2} />
   </AppStack.Navigator>
)

export default AppPacienteRoutes;
