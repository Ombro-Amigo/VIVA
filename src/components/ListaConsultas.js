import React from "react"
import { StyleSheet, FlatList } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Card from './Card'
import consultasPaciente from '../utils/consultasPaciente.json'
import consultasPsicologo from '../utils/consultasPsicologo.json'

export default function ListaConsultas(props){
    const consultasPac = consultasPaciente.consultas
    const consultasPsico = consultasPsicologo.consultas

    const { usuario } = props

    return(
        <FlatList
            style={styles.flatList}
            data={usuario === "pc" ? consultasPac : consultasPsico}
            renderItem={({item}) => 
                <Card 
                    name={item.name}
                    date={item.date}
                    crp={item.crp}
                    start={item.start}
                    end={item.end}
                    status={item.status}
                /> 
            }
            keyExtractor={item => item.id}
        />
    )
    
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: "#FFF",
        height: hp("52%"),
        borderRadius: 10,
        borderStyle: 'solid',
        paddingHorizontal: wp("4%"),
        paddingVertical: hp("1%"),
    },
});