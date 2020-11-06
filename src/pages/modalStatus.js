import React, {useContext} from 'react'
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Divider } from 'react-native-paper'

import StatesContext from '../contexts/states'

export default function modalStatus({modalVisible, setModalVisible}){

    const {dispo, setDispo} = useContext(StatesContext)

    return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
					<View style={styles.modalView}>
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
       alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
    title: {
       marginBottom: 15,
       textAlign: "center",
       fontSize: wp("6%"),
       fontWeight: 'bold',
    },
    areaEscolha: {
        alignItems: "center"
    },
    status1: {
        color: "green", 
        fontWeight: "bold", 
        fontSize: wp("5%")
    },
    status2: {
        color: "orange", 
        fontWeight: "bold", 
        fontSize: wp("5%")
    },
    status3: {
        color: "red", 
        fontWeight: "bold", 
        fontSize: wp("5%")
    },
    divider: {
        backgroundColor: "#C4C4C4",
        alignSelf: "center",
        width: wp("50%"),
        height: hp("0.3%"),
        marginVertical: hp("1%"),
    },
   
    closeButton: {
        marginTop: hp("2%"),
        paddingHorizontal: wp("25%"),
        paddingVertical: hp("2%"),
    },
 })
 