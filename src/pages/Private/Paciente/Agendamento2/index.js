import React, { useEffect } from 'react';

import { Formik } from 'formik';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
// import * as Yup from 'yup';

import Botao from '../../../../components/Botao';
import Fundo from '../../../../components/Fundo';
import ListaHorarios from '../../../../components/ListaHorarios';
import ListaPsicologo from '../../../../components/ListaPsicologos';
import { Creators as SchedulingActions } from '../../../../store/ducks/scheduling';
import styles from './style';

function Agendamento2({
	navigation,
	requestPsicoCreateScheduling,
	requestCreateScheduling,
	listPisco,
	dataScheduling,
	user,
}) {
	useEffect(() => {
		requestPsicoCreateScheduling();
	}, []);

	// const FormSchema = Yup.object().shape({
	// 	psicologo: Yup.string().required('O tipo da consulta é obrigatório'),
	// 	hora: Yup.string().required('A data da consulta é obrigatória'),
	// });

	return (
		<Fundo>
			<Formik
				initialValues={{
					psicologo: '',
					// dateConsultation: '',
				}}
				onSubmit={values => {
					console.log({ ...values, ...dataScheduling });
					Keyboard.dismiss();
					requestCreateScheduling({ ...values, ...dataScheduling }, user);
					navigation.navigate('HomePaciente');
				}}
				// validationSchema={FormSchema}
			>
				{({
					// handleChange,
					handleSubmit,
					setFieldValue,
					values,
					errors,
				}) => (
					<>
						<View style={styles.areaEscolhaPsicologo}>
							<Text style={styles.titleEscolha}>
								Escolha um dos psicólogos disponíveis:
							</Text>
							<ListaPsicologo
								value={values.psicologo}
								// onValueChange={handleChange('psicologo')}
								onValueChange={dateString =>
									setFieldValue('psicologo', dateString)
								}
								error={errors.psicologo}
								listPisco={listPisco}
							/>
						</View>
						<View style={styles.areaEscolhaDiaConsulta}>
							<Text style={styles.titleEscolha}>
								Esses são os horários disponíveis do psicólogo
								escolhido:
							</Text>
							<ListaHorarios
								value={values.hora}
								onValueChange={dateString =>
									setFieldValue('hora', dateString)
								}
								error={errors.hora}
							/>
						</View>
						<Botao
							style={styles.buttonFinalizarAgendamento}
							title='Finalizar Agendamento'
							onPress={handleSubmit}
						/>
					</>
				)}
			</Formik>
		</Fundo>
	);
}

const mapStateToProps = state => ({
	listPisco: state.scheduling.listPisco,
	dataScheduling: state.scheduling.dataScheduling,
	user: state.authSignIn.user,
});

const mapDispatchToProps = dispatch => ({
	requestPsicoCreateScheduling: () =>
		dispatch(SchedulingActions.requestPsicoCreateScheduling()),
	requestCreateScheduling: (dataScheduling, user) =>
		dispatch(SchedulingActions.requestCreateScheduling(dataScheduling, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Agendamento2);
