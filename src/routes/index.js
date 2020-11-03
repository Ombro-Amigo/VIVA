import React, { useContext } from 'react';

import AuthContext from '../contexts/auth/auth';

import AuthRoutes from './auth.routes'
import AppPacienteRoutes from './app.paciente.routes'
import AppPsicologoRoutes from './app.psicologo.routes'

import DrawerNavigatorPaciente from './app.drawer.paciente.routes'

const Routes = () => {
   const { initializing, user } = useContext(AuthContext);

   // console.log(user);

   // : typeUser === 'paciente' ? 
   // : <AppPsicologoRoutes />

   return !user ? <AuthRoutes /> : <DrawerNavigatorPaciente />;

   // return <AuthRoutes />
}

export default Routes;