import React, {Component, useState} from 'react'
import {Text, View, StyleSheet} from "react-native"
import {RadioButton} from "react-native-paper"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const TipoConsultas = () => {
    const [escolha, setEscolha] = useState("Gratuita")
    
    return (
        <RadioButton.Group onValueChange={value => setEscolha(value)} value={escolha}>
            <View style={styles.areaEscolha}>
                <View style={styles.escolhaGratuita}>
                    <RadioButton value="Gratuita" color="#34C5A2"/>
                    <Text style={styles.txtGratuita}>Gratuita</Text>
                </View>
                <View style={styles.escolhaPaga} >
                    <RadioButton value="Paga" color="#34C5A2"/>
                    <Text style={styles.txtPaga}>Paga</Text>
                </View>
            </View>
        </RadioButton.Group>
    )
}

export default TipoConsultas

const styles = StyleSheet.create({
    areaEscolha: {
        flexDirection: "row",
        marginTop: hp("2%"),
        borderStyle: "solid",
        justifyContent: "space-around",
        borderWidth: wp("0.8%"),
        borderColor: "#80C6F9",
        borderRadius: 10,
        padding: 4,
    },
    escolhaGratuita: {
        flexDirection: "row",
        alignItems: "center",
    },
    txtGratuita: {
        fontSize: hp("2.7%"),
        fontWeight: "bold",
    },
    escolhaPaga: {
        flexDirection: "row",
        alignItems: "center",
    },
    txtPaga: {
        fontSize: hp("2.7%"),
        fontWeight: "bold",
    }
})