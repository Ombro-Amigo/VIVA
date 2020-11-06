import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import ModalStatus from '../modalStatus'
import StatesContext from '../../contexts/states'
import MensagemStatus from '../../components/MensagemStatus'

export default function HomePsicologo({navigation}) {

    const [modalVisible, setModalVisible] = useState(false)
    const {dispo} = useContext(StatesContext)
    
    console.log(dispo)
    return (
        <Fundo>
            <View style={styles.container}>
                <View style={styles.teste}>
                    <Text style={styles.txtStatus}>Seu status: </Text>
                    <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}>
                        <MensagemStatus dispo={dispo}/>
                    </TouchableOpacity>    
                </View>
                
            </View>
            <ModalStatus modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </Fundo>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: hp("6%"),
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    teste: {
        width: wp("70%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    txtStatus: {
        fontSize: wp("5.5%"),
        fontWeight: "bold",
    },
})