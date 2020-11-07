import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function modalRangeConsultas({rangeConsultas}){
    let msg = ""
    switch(rangeConsultas){
        case 1:
            msg = "Hoje"
            break
        case 2:
            msg = "Esta semana"
            break
        case 3:
            msg = "Próxima semana"
            break
        case 4:
            msg = "Este mês"
            break
        case 5:
            msg = "Próximo mês"
            break
        default:
            msg = "Escolha o período de visualização"
            break
    }
    return(
        <View>
            <Text style={styles.txt}>{msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: "#186794",
        marginLeft: wp("5%"),
        fontSize: wp("5.5%"),
        fontWeight: "bold",
    }
})