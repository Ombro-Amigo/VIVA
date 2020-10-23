import React, { useContext } from 'react';

import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes'
import AppPacienteRoutes from './app.paciente.routes'
import AppPsicologoRoutes from './app.psicologo.routes'

const Routes = () => {
   const { signed, typeUser } = useContext(AuthContext);

   console.log(signed);

   return !signed ? <AuthRoutes /> : typeUser === 'paciente' ? <AppPacienteRoutes /> : <AppPsicologoRoutes />;

   // return <AuthRoutes />
}

export default Routes;