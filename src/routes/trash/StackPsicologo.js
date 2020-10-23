import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Imports telas psicologo
import LoginPsicologo from '../pages/psicologo/LoginPsicologo';
import CadastroPsicologo1 from '../pages/psicologo/CadastroPsicologo1';
import CadastroPsicologo2 from '../pages/psicologo/CadastroPsicologo2';
import ConfirmacaoCrp from '../pages/psicologo/ConfirmacaoCrp';
import Home from '../pages/psicologo/HomePsicologo';

const Stack = createStackNavigator();

export default function StackPsicologo() {
   <Stack.Navigator>
      <Stack.Screen name='LoginPsicologo' component={LoginPsicologo} />
      <Stack.Screen name='CadastroPsicologo1' component={CadastroPsicologo1} />
      <Stack.Screen name='CadastroPsicologo2' component={CadastroPsicologo2} />
      <Stack.Screen name='ConfirmacaoCrp' component={ConfirmacaoCrp} />
      <Stack.Screen name='Home' component={Home} />
   </Stack.Navigator>
}
