import React from 'react';

import { Formik } from 'formik';
import { View, Text, ScrollView, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import Botao from '../../../../components/Botao';
import Calendario from '../../../../components/Calendario';
import FormBackground from '../../../../components/form/FormBackground';
// import Fundo from '../../../../components/Fundo';
import TipoConsultas from '../../../../components/TipoConsultas';
import { Creators as SchedulingActions } from '../../../../store/ducks/scheduling';
import styles from './style';

function Agendamento1({ navigation, saveDataFormScheduling }) {
	const FormSchema = Yup.object().shape({
		typeConsultation: Yup.string().required(
			'O tipo da consulta é obrigatório'
		),
		dateConsultation: Yup.string().required(
			'A data da consulta é obrigatória'
		),
	});

	return (
		<ScrollView>
			<FormBackground>
				<View style={styles.containerAgendeConsulta}>
					<Text style={styles.txtAgendeConsulta}>Agende sua Consulta</Text>
				</View>

				<Formik
					initialValues={{
						typeConsultation: 'Gratuita',
						dateConsultation: '2020-11-24',
					}}
					onSubmit={values => {
						console.log(values);
						Keyboard.dismiss();
						saveDataFormScheduling(values);
						navigation.navigate('Agendamento2');
					}}
					validationSchema={FormSchema}
				>
					{({
						handleChange,
						handleSubmit,
						setFieldValue,
						values,
						errors,
					}) => (
						<>
							<View style={styles.escolhaTipoConsulta}>
								<Text style={styles.titleEscolha}>
									Escolha o tipo de consulta:
								</Text>
								<TipoConsultas
									value={values.typeConsultation}
									onValueChange={handleChange('typeConsultation')}
									error={errors.typeConsultation}
								/>
							</View>

							<View style={styles.escolhaDiaConsulta}>
								<Text style={styles.titleEscolha}>Escolha um dia:</Text>
								<Calendario
									value={values.dateConsultation}
									onValueChange={dateString =>
										setFieldValue('dateConsultation', dateString)
									}
									error={errors.dateConsultation}
								/>
							</View>
							<View style={styles.areaProximo}>
								<Botao
									style={styles.buttonProximo}
									title='Próximo'
									onPress={handleSubmit}
								/>
							</View>
						</>
					)}
				</Formik>
			</FormBackground>
		</ScrollView>
	);
}

const mapDispatchToProps = dispatch => ({
	saveDataFormScheduling: partDataScheduling =>
		dispatch(SchedulingActions.saveDataFormScheduling(partDataScheduling)),
});

export default connect(null, mapDispatchToProps)(Agendamento1);
