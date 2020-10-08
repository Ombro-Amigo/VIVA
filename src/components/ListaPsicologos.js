import React, {useState} from "react"
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"

const ListaPsicologo = () => {

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
            name: "Nome do(a) psicólogo(a)",
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

    const [itemId, setItemId] = useState("")
    
    return (
        <FlatList
            style={styles.container}
            data={psicologo}
            renderItem={({item}) =>
                <View style={{
                    flex: 1,
                    backgroundColor: "#77DCC3",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                    borderRadius: 10,
                    marginBottom: 10,
                    border: "solid",
                    borderColor: "green",
                    borderWidth: itemId === item.id ? 2.5 : 0
                }} onTouchStart={() => setItemId(item.id)}>
                    <View style={styles.infosPsicologo}>
                        <Image 
                            style={styles.fotoPsicologo}
                            source={item.photo}
                        />
                        <Text style={styles.nomePsicologo}>{item.name}</Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            style={styles.tresPontos}
                            source={require("../../assets/mais-opcoes.png")} 
                        />
                    </TouchableOpacity>
                </View>
                
            }
            keyExtractor={item => item.id}
        />
    )
}

export default ListaPsicologo;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginTop: hp("2.5%"),
        height: hp("32%"),
        borderRadius: 10,
        paddingHorizontal: hp("1.7%"),
        paddingVertical: hp("1%"),
    },
    infosPsicologo:{
        flexDirection: "row",
        alignItems: "flex-end"
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
    tresPontos: {
        width: 20,
        height: 20,
    },
})