import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'

export default function MenuConfigAplicativo({navigation}){
    return(
        <Fundo padding={null}> 
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Configurações do Aplicativo</Text>
            </View>
            
            <View style={styles.containerOpcoes}>
                <View style={styles.opcao}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.txtOpcao}>Notificações</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.opcao}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.txtOpcao}>Histórico de ligações</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Fundo>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        padding: wp("5%"),
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#FFF"
    },
    title: {
        color: "#186794",
        fontSize: wp("5%"),
        fontWeight: "bold"
    },
    areaAltFotoUser:{
        flexDirection: "row",
        alignItems: "flex-end",
    },
    txtNome: {
        color: "#000",
        fontSize: wp("4.5%"),
        fontWeight: "bold",
        marginLeft: wp("6%"),
    },
    opcao: {
        padding: wp("4%"),
        borderBottomWidth: 1,
        borderColor: "#C3C3C3"
    },
    txtOpcao:{
        color: "#FFF",
        fontSize: wp("5%"),
        fontWeight: "bold",
    }
})