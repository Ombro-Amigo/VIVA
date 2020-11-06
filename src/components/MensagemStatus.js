import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function MensagemStatus({dispo}){

    let cor = ""
        let msg = ""
        if (dispo === 1){
            cor = "green",
            msg = "Disponível"
        }else if(dispo === 2){
            cor = "orange",
            msg = "Em consulta"
        }else{
            cor = "red",
            msg = "Ocupado"
        }
    return(
        <View style={styles.areaMsg}>
            <View style={{backgroundColor: cor, width: 15, height: 15, borderRadius: 100}}/>
            <Text style={{color: cor, fontWeight: "bold", fontSize: wp("5%"), marginLeft: wp("2%")}}>{msg}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    areaMsg: {
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        width: 15, 
        height: 15, 
        borderRadius: 100,
    }

})