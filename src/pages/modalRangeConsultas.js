import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'
import StatesContext from '../contexts/states'

export default function modalRangeConsultas({modalVisible, setModalVisible}){
    const {rangeConsultas, setRangeConsultas} = useContext(StatesContext)
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
                        <Text style={styles.title}>ESCOLHA O PERIÓDO DE VISUALIZAÇÃO DE CONSULTAS</Text>
                        <View style={styles.areaEscolha}>
                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setRangeConsultas(1)}}>
                                <Text style={styles.range}>Hoje</Text>
                            </TouchableOpacity>
                                
                            <Divider style={styles.divider}/>
                            
                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setRangeConsultas(2)}}>
                                <Text style={styles.range}>Esta semana</Text>
                            </TouchableOpacity>

                            <Divider style={styles.divider}/>

                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setRangeConsultas(3)}}>
                                <Text style={styles.range}>Próxima semana</Text>
                            </TouchableOpacity>

                            <Divider style={styles.divider}/>

                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setRangeConsultas(4)}}>
                                <Text style={styles.range}>Este mês</Text>
                            </TouchableOpacity>

                            <Divider style={styles.divider}/>

                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible), setRangeConsultas(5)}}>
                                <Text style={styles.range}>Próximo mês</Text>
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
        fontSize: wp("6%"),
        fontWeight: 'bold',
    },
    areaEscolha: {
        alignItems: "center",
    },
    range: {
        color: "#186794",
        fontWeight: "bold", 
        fontSize: wp("5%")
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