import React from 'react'
import * as Yup from 'yup';
import { View, Text, StyleSheet, ScrollView, Keyboard } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Botao from '../../components/Botao'
import Calendario from '../../components/Calendario'
import FormBackground from '../../components/form/FormBackground'
import Fundo from '../../components/Fundo'
import TipoConsultas from "../../components/TipoConsultas"
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { Creators as SchedulingActions } from '../../store/ducks/scheduling';


function Agendamento1({ navigation, saveDataScheduling }) {
	const FormSchema = Yup.object().shape({
		typeConsultation: Yup.string().required('O tipo da consulta é obrigatório'),
		dateConsultation: Yup.string().required('A data da consulta é obrigatória'),
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
						saveDataScheduling(values);
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
								<Text style={styles.titleEscolha}>Escolha o tipo de consulta:</Text>
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
									title={"Próximo"}
									onPress={handleSubmit}
								/>
							</View>
						</>
					)}
				</Formik>
			</FormBackground>
		</ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#6EB4E7",
   },
   txtAgendeConsulta: {
      color: "#186794",
      marginTop: hp("1%"),
		fontFamily: "Signika-Bold",
		fontSize: 25,
      textAlign: "center",
   },
   escolhaTipoConsulta: {
      marginTop: hp("3.5%"),
   },
   titleEscolha: {
      color: "#FFF",
		fontFamily: "Signika-Bold",
		fontSize: 18,
   },
   escolhaDiaConsulta: {
      marginTop: hp("3.5%"),
   },
   buttonProximo: {
      backgroundColor: "#34C5A2",
      alignItems: "center",
      marginTop: hp("2.5%"),
      paddingVertical: hp("2.5%"),
   },
})

const mapDispatchToProps = dispatch => ({
	saveDataScheduling: partDataScheduling =>
		dispatch(SchedulingActions.saveDataScheduling(partDataScheduling)),
});

export default connect(null, mapDispatchToProps)(Agendamento1);
