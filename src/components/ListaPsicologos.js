import React, {Component} from "react"
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"

export default class ListaPsicologo extends Component{
    render(){
        const psicologo = [
            {
                id: "1",
                photo: require('../../assets/usuario-cards-e-menu.png'),
                name: "Nome do(a) psicólogo(a)"
            },
            {
                id: "2",
                photo: require('../../assets/usuario-cards-e-menu.png'),
                name: "Nome do(a) psicólogo(a)"
            },
            {
                id: "3",
                photo: require('../../assets/usuario-cards-e-menu.png'),
                name: "Nome do(a) psicólogo(a)"
            },
            {
                id: "4",
                photo: require('../../assets/usuario-cards-e-menu.png'),
                name: "Nome do(a) psicólogo(a)"
            },
            {
                id: "5",
                photo: require('../../assets/usuario-cards-e-menu.png'),
                name: "Nome do(a) psicólogo(a)"
            }
        ]
        
        return (
            <FlatList
                style={styles.container}
                data={psicologo}
                renderItem={({item}) =>
                    <TouchableOpacity style={styles.cardPsicologo}>
                        <Image 
                            style={styles.fotoPsicologo}
                            source={item.photo} 
                        />
                        <Text style={styles.nomePsicologo}>{item.name}</Text>
                        <Image
                            style={styles.tresPontos}

                        /> 
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginTop: hp("3.5%"),
        height: hp("32%"),
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    cardPsicologo: {
        backgroundColor: "#34C5A2",
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    fotoPsicologo: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    nomePsicologo: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: wp("3%")
    },
})