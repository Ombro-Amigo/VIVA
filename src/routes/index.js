import React from 'react';

import { connect } from 'react-redux';

import DrawerNavigatorPaciente from './app.drawer.paciente.routes';
import DrawerNavigatorPsicologo from './app.drawer.psicologo.routes';
import AuthRoutes from './auth.routes';

const Routes = ({ user, typeUser }) => {
	return !user && !typeUser ? (
		<AuthRoutes />
	) : typeUser === 'paciente' ? (
		<DrawerNavigatorPaciente />
	) : (
		<DrawerNavigatorPsicologo />
	);
};

const mapStateToProps = state => ({
	user: state.authSignIn.user,
	typeUser: state.authSignIn.typeUser,
	loading: state.authSignIn.loading,
});

export default connect(mapStateToProps)(Routes);
