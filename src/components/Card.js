import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'
import Botao from './Botao'

export default function Card(props){
    const {
        photo,
        name,
        date,
        start,
        end,
        status,
    } =  props

    return(
        <TouchableOpacity style={styles.card}>
            <View style={styles.areaInfoPsicologo}>
                <Image
                    style={styles.fotoPsicologo}
                    source={photo}
                />
                <Text style={styles.nomePsicologo}>{name}</Text>
            </View>
            <Divider style={styles.divider}/>
            <View style={styles.areaInfoConsulta}>
                <View style={styles.diaHora}>
                    <Text style={styles.txtCard}>Data: {date}</Text>
                    <Text style={styles.txtCard}>Início: {start}</Text>
                    <Text style={styles.txtCard}>Término: {end}</Text>
                </View>
                <View style={styles.statusConsulta}>
                    <Text style={styles.txtCard}>Status: <Text style={styles.txtCardStatus}>{status}</Text></Text>
                    <Botao
                        style={styles.buttonCancelarConsulta}
                        title={"Cancelar Consulta"}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#A1E9D7",
        padding: 10,
        borderRadius: 10,
        marginBottom: hp("2%"),
    },
    divider: {
        backgroundColor: "#000",
        alignSelf: "center",
        width: wp("75%"),
        height: hp("0.3"),
        marginVertical: hp("1%"),
    },
    areaInfoPsicologo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",

    },
    fotoPsicologo: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    nomePsicologo: {
        fontSize: wp("4.5%"),
        fontWeight: "bold",
    },
    areaInfoConsulta: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    statusConsulta: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    txtCard: {
        fontSize: wp("4.2%"),
        fontWeight: "bold",
    },
    txtCardStatus: {
        color: "green",
    },
    buttonCancelarConsulta: {
        backgroundColor: "#ED0000",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: wp("2%"),
        paddingVertical: hp("1%"),
    },
});