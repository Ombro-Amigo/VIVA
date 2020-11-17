import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function RespostaValidacaoCrp({validate}){
    let msg = ""
    if(validate){
        msg = "Seu CRP foi validado com sucesso." + 
        " Agora você pode acessar as funcionalidades do aplicativo."
    }else{
        msg = "Seu CRP não foi validado com sucesso." +
        " Verifique se informou o CRP corretamente e tente realizar o cadastro novamente."
    }
    return(
        <View>
            <Text style={[{color: validate ? "#219653" : "#FF1100"}, styles.txt]}>
                {msg}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: wp("5.5%"),
        fontWeight: "bold",
        textAlign: "center"
    }
})