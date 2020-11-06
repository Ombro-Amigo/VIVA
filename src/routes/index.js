import React, { useContext } from 'react';

import AuthContext from '../contexts/auth/auth';

import AuthRoutes from './auth.routes'
import AppPacienteRoutes from './app.paciente.routes'
import AppPsicologoRoutes from './app.psicologo.routes'

import DrawerNavigatorPaciente from './app.drawer.paciente.routes'
import DrawerNavigatorPsicologo from './app.drawer.psicologo.routes'
import Loading from '../pages/Loading';

const Routes = () => {
   // const [auth] = useAuth();
   const { loading, user, authenticated, typeUser } = useContext(AuthContext);

   // // console.log(user);

   // // : typeUser === 'paciente' ? 
   // // : <AppPsicologoRoutes />
   // console.log(`Teste: ${typeUser === 'paciente'}`);

   if(loading)
      return <Loading/>;

   // return !user ? <AuthRoutes /> :
   //        typeUser === 'paciente' ? 
   //        <DrawerNavigatorPaciente /> : <DrawerNavigatorPsicologo />;

   return !authenticated ? <AuthRoutes /> :
            typeUser === "paciente" ? <DrawerNavigatorPaciente /> :
               typeUser === "psicologo" ? <DrawerNavigatorPsicologo /> :
               <Loading />;
}

export default Routes;