import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import ModalStatus from '../modalStatus'
import ModalPeriodoConsultas from '../modalPeriodoConsultas'
import StatesContext from '../../contexts/states'
import MensagemStatus from '../../components/MensagemStatus'
import PeriodoConsultas from '../../components/PeriodoConsultas'
import ListaConsultas from '../../components/ListaConsultas'
import { Creators as appointmentActions } from '../../store/ducks/appointment'
import { connect } from 'react-redux'

function HomePsicologo({
	navigation,
	listAppointments,
	uid,
	loading,
	requestAppointments,
}) {

    const [modalStatusVisible, setModalStatusVisible] = useState(false)
    const [modalRangeVisible, setModalRangeVisible] = useState(false)

    const {dispo} = useContext(StatesContext)
    const {rangeConsultas} = useContext(StatesContext)

	//  console.log(rangeConsultas)

	 useEffect(() => {
		requestAppointments(uid, 'psicologo');
	}, []);

    return (
        <Fundo>
            <View style={styles.container}>
                <View style={styles.areaStatus}>
                    <Text style={styles.txtStatus}>Seu status: </Text>
                    <TouchableOpacity  onPress={() => setModalStatusVisible(!modalStatusVisible)}>
                        <MensagemStatus dispo={dispo}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.areaListaConsultas}>
                <Text style={styles.title}>Consultas Agendadas</Text>

                    <TouchableOpacity onPress={() => setModalRangeVisible(!modalRangeVisible)}>
                        <View style={styles.periodoConsultas}>
                            <PeriodoConsultas rangeConsultas={rangeConsultas}/>
                        </View>
                    </TouchableOpacity>

					 <ListaConsultas style={styles.listaConsultas}
						listAppointments={listAppointments}
						loading={loading}
					/>
            </View>

            <ModalStatus modalVisible={modalStatusVisible} setModalVisible={setModalStatusVisible}/>
            <ModalPeriodoConsultas modalVisible={modalRangeVisible} setModalVisible={setModalRangeVisible}/>
        </Fundo>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: hp("6%"),
        marginTop: hp("3%"),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    areaStatus: {
        width: wp("70%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    txtStatus: {
        fontSize: wp("5.5%"),
        fontWeight: "bold",
    },
    areaListaConsultas: {
        marginTop: wp("8%"),
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: wp("5.5%"),
    },
    periodoConsultas: {
        backgroundColor: "#80C6F9",
        marginVertical: hp("2%"),
        height: hp("7%"),
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    listaConsultas: {
        marginTop: hp("1.5%"),
    },
})

const mapStateToProps = state => ({
	uid: state.authSignIn.user.uid,
	listAppointments: state.appointment.listAppointments,
	loading: state.appointment.loading,
});

const mapDsipatchToProps = dispatch => ({
	requestAppointments: (uid, typeUser) =>
		dispatch(appointmentActions.requestAppointments(uid, typeUser)),
});

export default connect(mapStateToProps, mapDsipatchToProps)(HomePsicologo);
