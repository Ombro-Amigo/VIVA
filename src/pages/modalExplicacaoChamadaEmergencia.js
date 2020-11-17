import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Botao from '../components/Botao'

export default function modalExplicacaoChamadaEmergencia({modalVisible, setModalVisible}){
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
                        <Text style={styles.title}>Ligação de Emergência</Text>
						<Text style={styles.modalText}>
                            Se precisar fazer uma ligação de emergência, iremos te encaminhar
                            para uma chamada com o CVV (188), onde receberá um atendimento
                            gratuito e voluntário.
                        </Text>

                        <Botao
                        title="OK!"
                        style={styles.closeButton}
                        onPress={() => setModalVisible(!modalVisible)}
                        />
						
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
        elevation: 5,
        textAlign: "left"
    },
    cliqueSair: {
        alignSelf: "flex-end",
    },
    sairModal: {
        width: 18,
        height: 18,
    },
    title: {
        color: "#186794",
        marginTop: hp("2.5%"),
        marginBottom: hp("2.5%"),
        textAlign: "center",
        fontSize: wp("6%"),
        fontWeight: 'bold',
    },
    areaEscolha: {
        alignItems: "center",
    },
    modalText: {
        color: "#000",
        fontWeight: "bold", 
        fontSize: wp("5%"),
        textAlign: "center"
    },
    closeButton: {
        marginTop: hp("4%"),
        paddingHorizontal: wp("25%"),
        paddingVertical: hp("2%"),
    },
})