import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'
import Botao from './Botao'

export default function Card(props){
    const {
        photo,
        name,
        crp,
        date,
        start,
        end,
        status,
    } =  props

    return(
        <View style={styles.card}>
            <View style={styles.infoUsuario}>
                <View style={{flexDirection: "row"}}>
                    <Image
                        style={styles.foto}
                        source={require('../assets/icon/usuario-cards-e-menu.png')}
                    />
                    <View style={styles.containerCrpNome}>
                        <Text style={styles.txt1}>{crp}</Text>
                        <Text style={styles.txt1}>{name}</Text>    
                    </View>
                </View>
           
                <TouchableOpacity style={styles.cliqueExcluir}>
                    <Image
                        style={styles.excluirConsulta}
                        source={require('../assets/icon/button-fechar.png')}
                    />
                </TouchableOpacity>
            </View>
            <Divider style={styles.divider}/>
            <View style={styles.areaInfoConsulta}>
                <View style={styles.line}>
                    <View style={styles.group}>
                        <Image style={styles.icon} source={require('../assets/icon/calendario.png')}/>
                        <Text style={styles.txt2}>{date}</Text>
                    </View>
                    <View style={styles.group}>
                        <Image style={styles.icon} source={require('../assets/icon/relogio.png')}/>
                        <Text style={styles.txt2}>{start} - {end}</Text>
                    </View>
                </View>
                <View style={styles.line2}>
                    <Botao
                        title={"Chat"}
                        corFundo={null}
                        onPress={() => console.log("Clicou no chat.")}
                        img={require('../assets/icon/chat.png')}
                        imgStyle={[styles.icon, {marginRight: wp("3%")}]}
                        style={styles.btnChat}
                        highlight
                        direction="row-reverse"
                        activeOpacity={0.50}
                        underlayColor={"#34C5A2"}
                        
                    />
                        
                        {/* <View style={styles.containerBtn}>   
                            <Image  source={}/>
                            <Text style={styles.txt2}>Chat</Text>    
                        </View> */}
                        
                    {/* </Botao> */}
                    <Text style={styles.txt2}>Status: <Text style={{color: "green"}}>Confirmada</Text></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#8EDAC8",
        padding: 10,
        borderRadius: 10,
        marginBottom: hp("2%"),
    },
    divider: {
        backgroundColor: "#000",
        alignSelf: "center",
        width: wp("75%"),
        height: hp("0.3%"),
        marginVertical: hp("1%"),
    },
    infoUsuario: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",

    },
    foto: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    containerCrpNome: {
        height: hp("10%"),
        marginLeft: wp("2%"),
        justifyContent: "space-between",
    },
    txt1: {
        fontSize: wp("4.5%"),
        fontWeight: "bold",
    },
    cliqueExcluir: {
        alignSelf: "flex-start",
    },
    excluirConsulta: {
        width: 18,
        height: 18,
    },
    areaInfoConsulta: {
        flexDirection: "column",
        justifyContent: "center",
    },
    line: {
        flexDirection: "row",
        width: wp("80%"),
        marginVertical: hp("1%"),
        justifyContent: "space-between",
        alignItems: "center"
    },
    line2: {
        flexDirection: "row",
        width: wp("80%"),
        marginVertical: hp("1%"),
        justifyContent: "space-around",
        alignItems: "center"
    },
    group: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        width: 20,
        height: 20,
    },
    txt2: {
        color: "#FFF",
        fontSize: wp("5%"),
        fontWeight: "bold",
        marginLeft: wp("2%"), 
    },
    btnChat: {
        paddingVertical: hp("0.8%"),
        paddingHorizontal: wp("4%"),
        borderRadius: 15,
        borderWidth: wp("0.8%"),
        borderColor: "#565656",
        justifyContent: "space-around",
    },
});