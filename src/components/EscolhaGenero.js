import React, {Component, useState} from 'react'
import {Text, View, StyleSheet} from "react-native"
import {RadioButton} from "react-native-paper"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default function EscolhaGenero(props){
    const {onValueChange, value} = props
    return (
        <RadioButton.Group onValueChange={onValueChange} value={value}>
            <View style={styles.areaEscolha}>
                <View style={styles.escolha}>
                    <RadioButton value="Feminino" color="#34C5A2"/>
                    <Text style={styles.txtOpcoes}>Feminino</Text>
                </View>
                <View style={styles.escolha} >
                    <RadioButton value="Masculino" color="#34C5A2"/>
                    <Text style={styles.txtOpcoes}>Masculino</Text>
                </View>
                <View style={styles.escolha} >
                    <RadioButton value="Outro" color="#34C5A2"/>
                    <Text style={styles.txtOpcoes}>Outro</Text>
                </View>
            </View>
        </RadioButton.Group>
    )
}

const styles = StyleSheet.create({
    areaEscolha: {
        flex: 1,
        justifyContent: "space-between",
        padding: wp("1%"),
    },
    escolha: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp("1%")
    },
    txtOpcoes: {
        fontSize: wp("4%"),
        fontWeight: "bold",
    },
})