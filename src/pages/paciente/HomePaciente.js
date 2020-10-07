import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import ListaConsultas from '../../components/ListaConsultas';

export default function HomePaciente() {
   return (
    <View style={styles.container}>
        <SafeAreaView style={styles.areaConsultas}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Consultas Agendadas</Text>
            </View>
            <ListaConsultas/>
        </SafeAreaView>
        <View style={styles.agendarConsulta}>
            <TouchableOpacity style={styles.buttonAgendarConsul}>
                <Text style={styles.txtButtonAgendarConsul}>AGENDAR UMA NOVA CONSULTA</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.areaAnuncio}>
            <TouchableOpacity style={styles.buttonAssistirAnuncio}>
                <Text style={styles.txtButtonAssistirAnuncio}>ASSISTIR UM ANÚNCIO</Text>
            </TouchableOpacity>
            <View style={styles.areaPontos}>
                <Image
                    style={styles.logoPontos}
                    source={require('../../../assets/logo_header.png')}
                />
                <Text style={styles.txtPontos}>000</Text>
            </View>
        </View>
        
    </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6EB4E7",
        padding: 20,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
    },
    areaConsultas: {
        flex: 1
    },
    buttonAgendarConsul: {
        backgroundColor: "#80C6F9",
        alignItems: "center",
        marginTop: 15,
        paddingVertical: 20,
        borderRadius: 15,

        // IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        // ANDROID
        elevation: 4,
    },
    txtButtonAgendarConsul: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15,
    },
    areaAnuncio: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    buttonAssistirAnuncio: {
        backgroundColor: "#34C5A2",
        justifyContent: "center",
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,

        // IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        // ANDROID
        elevation: 4,
    },
    txtButtonAssistirAnuncio: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
    },
    areaPontos: {
        borderColor: "#FFF",
        marginTop: 15,
        padding: 5,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 15,
    },
    logoPontos: {
        width: 45,
        height: 45,
        
    },
    txtPontos: {  
        fontSize: 20,
    },

});