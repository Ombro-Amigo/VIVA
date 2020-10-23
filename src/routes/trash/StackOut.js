import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Gerais
import Encaminhamento from '../pages/geral/Encaminhamento';

// Paciente
import LoginPaciente from '../pages/paciente/LoginPaciente';
import CadastroPaciente1 from '../pages/paciente/CadastroPaciente1';
import CadastroPaciente2 from '../pages/paciente/CadastroPaciente2';

// Psicologo
import LoginPsicologo from '../pages/psicologo/LoginPsicologo';
import CadastroPsicologo1 from '../pages/psicologo/CadastroPsicologo1';
import CadastroPsicologo2 from '../pages/psicologo/CadastroPsicologo2';

const Stack = createStackNavigator();

const StackOut = () => {
   return(
      <Stack.Navigator>
         <Stack.Screen name='Encaminhamento' component={Encaminhamento} />

         <Stack.Screen name='LoginPaciente' component={LoginPaciente} />
         <Stack.Screen name='CadastroPaciente1' component={CadastroPaciente1} />
         <Stack.Screen name='CadastroPaciente2' component={CadastroPaciente2} />

         <Stack.Screen name='LoginPsicologo' component={LoginPsicologo} />
         <Stack.Screen name='CadastroPsicologo1' component={CadastroPsicologo1} />
         <Stack.Screen name='CadastroPsicologo2' component={CadastroPsicologo2} />
      </Stack.Navigator>
   );
}

export { StackOut };
