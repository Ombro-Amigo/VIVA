import React, { useState } from 'react'
import ListaPsicologo from './ListaPsicologos'
import { Text, View, FlatList, StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"

const ListaHorarios = () =>{
    
    const horarios = [
        {
            id: "1",
            inicio: "9h30",
            termino: "11h:00",
        },
        {
            id: "2",
            inicio: "11h30",
            termino: "13h:00",
            
        },
        {
            id: "3",
            inicio: "13h30",
            termino: "15:00",
        },
        {
            id: "4",
            inicio: "15h30",
            termino: "17h:30",
        }
    ]

    const [itemId, setItemId] = useState("")

    return(
        <FlatList
            style={styles.container}
            data={horarios}
            renderItem={({item}) =>
                <View style={{
                    flex: 1,
                    backgroundColor: "#80C6F9",
                    flexWrap: "wrap",
                    margin: wp("1%"),
                    padding: 5,
                    justifyContent: "center",
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderColor: "#4B53FF",
                    borderWidth: itemId === item.id ? 2.5 : 0
                }} onTouchStart={() => setItemId(item.id)}
                >
                    <Text style={styles.txtHorario}>{item.inicio} - {item.termino}</Text>
                </View>
            }
            horizontal={true}
        />
    )
}

export default ListaHorarios;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginTop: hp("2.5%"),
        height: hp("10%"),
        borderRadius: 10,
        paddingHorizontal: wp("0.5%"),
        paddingVertical: hp("1.2%"),
    },
    txtHorario: {
        fontSize: wp("4.5%"),
        fontWeight: "bold"
    }
})