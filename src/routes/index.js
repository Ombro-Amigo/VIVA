import React from 'react';

import { connect } from 'react-redux';

import AuthRoutes from './auth.routes';

import DrawerNavigatorPaciente from './app.drawer.paciente.routes';
import DrawerNavigatorPsicologo from './app.drawer.psicologo.routes';

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
	user: state.authSignUp.user,
	typeUser: state.authSignUp.typeUser,
	loading: state.authSignUp.loading,
});

export default connect(mapStateToProps)(Routes);
