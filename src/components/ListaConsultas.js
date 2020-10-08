import React, { Component} from "react"
import { View, Image, Text, StyleSheet, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Botao from './Botao'

export default class ListaConsultas extends Component{
    render(){
        const consultas = [
            {
                id: "1",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../../assets/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            },
            {
                id: "2",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../../assets/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            },
            {
                id: "3",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../../assets/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            },
            {
                id: "4",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../../assets/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            }
        ]

        return(
            <FlatList
                style={styles.flatList}
                data={consultas}
                renderItem={({item}) => 
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.areaInfoPsicologo}>
                            <Image
                                style={styles.fotoPsicologo}
                                source={item.photo}
                            />
                            <Text style={styles.nomePsicologo}>{item.name}</Text>
                        </View>
                        <View style={styles.teste}/>
                        <View style={styles.areaInfoConsulta}>
                            <View style={styles.diaHora}>
                                <Text style={styles.txtCard}>Data: {item.date}</Text>
                                <Text style={styles.txtCard}>Início: {item.start}</Text>
                                <Text style={styles.txtCard}>Término: {item.end}</Text>
                            </View>
                            <View style={styles.statusConsulta}>
                                <Text style={styles.txtCard}>Status: <Text style={styles.txtCardStatus}>{item.status}</Text></Text>
                                <Botao
                                    style={styles.buttonCancelarConsulta}
                                    title={"Cancelar Consulta"}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>}
                keyExtractor={item => item.id}
            />
        )
    }
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: "#FFF",
        height: 325,
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 15,
    },
    card: {
        backgroundColor: "#A1E9D7",
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
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
        fontSize: 15,
        fontWeight: "bold"
    },
    teste: {
        backgroundColor: "#000",
        borderColor: "#000",
        borderStyle: "solid",
        borderWidth: 1,
        margin: 10
    },
    areaInfoConsulta: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    statusConsulta: {
        alignItems: "center",
        justifyContent: "space-between"
    },
    txtCard: {
        fontSize: 15,
        fontWeight: "bold",
    },
    txtCardStatus: {
        color: "green",
    },
    buttonCancelarConsulta: {
        backgroundColor: "#ED0000",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        paddingHorizontal: wp("2%"),
        paddingVertical: hp("1%"),

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
});