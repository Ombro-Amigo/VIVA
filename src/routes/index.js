import React, { useContext } from 'react';

import { connect } from 'react-redux';
import AuthContext from '../contexts/auth/auth';

import AuthRoutes from './auth.routes';
import AppPacienteRoutes from './app.paciente.routes';
import AppPsicologoRoutes from './app.psicologo.routes';

import DrawerNavigatorPaciente from './app.drawer.paciente.routes';
import DrawerNavigatorPsicologo from './app.drawer.psicologo.routes';
import Loading from '../pages/Loading';

const Routes = ({ user, typeUser }) => {
	// const [auth] = useAuth();

	// // console.log(user);

	// // : typeUser === 'paciente' ?
	// // : <AppPsicologoRoutes />
	// console.log(`Teste: ${typeUser === 'paciente'}`);

	// if (loading) return <Loading />;

	// return !user ? <AuthRoutes /> :
	//        typeUser === 'paciente' ?
	//        <DrawerNavigatorPaciente /> : <DrawerNavigatorPsicologo />;

	return !user && !typeUser ? (
		<AuthRoutes />
	) : typeUser === 'paciente' ? (
		<DrawerNavigatorPaciente />
	) : (
		<DrawerNavigatorPsicologo />
	);

	// return loading ? <Loading /> :
	//          !authenticated ? <AuthRoutes /> :
	//             typeUser === "paciente" ? <DrawerNavigatorPaciente /> :
	//                typeUser === "psicologo" ? <DrawerNavigatorPsicologo /> :
	//                <Loading />;
};

const mapStateToProps = state => ({
	user: state.auth.user,
	typeUser: state.auth.typeUser,
	loading: state.auth.loading,
});

export default connect(mapStateToProps)(Routes);
