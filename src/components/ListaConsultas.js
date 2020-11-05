import React, { Component} from "react"
import { View, Image, Text, StyleSheet, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'
import Botao from './Botao'
import Card from './Card'

export default class ListaConsultas extends Component{
    render(){
        const consultas = [
            {
                id: "1",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../assets/icon/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            },
            {
                id: "2",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../assets/icon/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            },
            {
                id: "3",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../assets/icon/usuario-cards-e-menu.png"),
                date: "dd/mm/aaaa",
                start: "hh:mm",
                end: "hh:mm",
                status: "Confirmada"
            },
            {
                id: "4",
                name: "Nome do(a) psicólogo(a)",
                photo: require("../assets/icon/usuario-cards-e-menu.png"),
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
                    <Card 
                        photo={item.photo}
                        name={item.name}
                        date={item.date}
                        start={item.start}
                        end={item.end}
                        status={item.status}
                    /> 
                }
                keyExtractor={item => item.id}
            />
        )
    }
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: "#FFF",
        height: hp("52%"),
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 15,
    },
});