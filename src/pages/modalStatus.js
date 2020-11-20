import React, {useContext} from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Divider } from 'react-native-paper'

import StatesContext from '../contexts/states'

export default function modalStatus({modalVisible, setModalVisible}){

    const {dispo, setDispo} = useContext(StatesContext)

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
					<View style={styles.modalView}>
                        <TouchableOpacity style={styles.cliqueSair} onPress={() => setModalVisible(!modalVisible)}>
                            <Image
                                style={styles.sairModal}
                                source={require('../assets/icon/button-fechar.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>DEFINA SEU STATUS DE DISPONIBILIDADE</Text>
                        <View style={styles.areaEscolha}>
                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setDispo(1)}}>
                                <Text style={styles.status1}>Disponível</Text>
                            </TouchableOpacity>

                            <Divider style={styles.divider}/>

                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setDispo(2)}}>
                                <Text style={styles.status2}>Em consulta</Text>
                            </TouchableOpacity>

                            <Divider style={styles.divider}/>

                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setDispo(3)}}>
                                <Text style={styles.status3}>Ocupado</Text>
                            </TouchableOpacity>
                        </View>


					</View>
				</View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    centeredView: {
       flex: 1,
       justifyContent: "center",
    //    alignItems: "center",
    },
    modalView: {
        marginHorizontal: wp("4%"),
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingVertical: hp("3%"),
        paddingHorizontal: wp("4%"),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cliqueSair: {
        alignSelf: "flex-end",
    },
    sairModal: {
        width: 18,
        height: 18,
    },
    title: {
        marginTop: hp("2.5%"),
        marginBottom: hp("2.5%"),
        textAlign: "center",
        fontFamily: "Signika-Bold",
        fontSize: 21,
    },
    areaEscolha: {
        alignItems: "center"
    },
    status1: {
        color: "green",
        fontFamily: "Signika-Medium",
        fontSize: 18,
    },
    status2: {
        color: "orange",
        fontFamily: "Signika-Medium",
        fontSize: 18,
    },
    status3: {
        color: "red",
        fontFamily: "Signika-Medium",
        fontSize: 18,
    },
    divider: {
        backgroundColor: "#C4C4C4",
        alignSelf: "center",
        width: wp("50%"),
        height: hp("0.1%"),
        marginVertical: hp("1.5%"),
    },

    closeButton: {
        marginTop: hp("2%"),
        paddingHorizontal: wp("25%"),
        paddingVertical: hp("2%"),
    },
 })
