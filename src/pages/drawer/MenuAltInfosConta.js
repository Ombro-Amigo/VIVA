import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'


export default function MenuAltInfosConta({navigation}){
    return(
        <Fundo padding={null}> 
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Alterar informações da conta</Text>
            </View>
            <View style={styles.containerInfosUSer}>
                <View style={styles.areaAltFotoUser}>
                    <Image
                        style={styles.photo}
                        source={require('../../assets/icon/usuario-cards-e-menu.png')}
                    />
                    <TouchableOpacity style={styles.containerIconCam} onPress={() => {}}>
                        <Image
                            style={styles.iconCam}
                            source={require('../../assets/icon/camera-foto.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.txtNome}>Nome de usuário</Text>
            </View>
            <View style={styles.containerOpcoes}>
                <View style={styles.opcao}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.txtOpcao}>Alterar o nome de usuário</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.opcao}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.txtOpcao}>Alterar o email da conta</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.opcao}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.txtOpcao}>Visualizar o status do seu CRP</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.opcao}>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={styles.txtOpcao}>Alterar sua senha</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.opcao} >
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={[styles.txtOpcao, {color: "red"}]}>Excluir sua conta</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </Fundo>
    )
}

const styles = StyleSheet.create({
    containerHeader: {
        padding: wp("5%"),
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#FFF"
    },
    title: {
        color: "#186794",
        fontSize: wp("5%"),
        fontWeight: "bold"
    },
    containerInfosUSer: {
        padding: wp("4%"),
        flexDirection: "row",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderColor: "#DCDCDC",
    },
    areaAltFotoUser:{
        flexDirection: "row",
        alignItems: "flex-end",
    },
    photo: { 
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#000",
    },
    containerIconCam: {
        position: "absolute",
        width: 40,
        height: 40,
        marginLeft: wp("12%"),
        backgroundColor: "#C4C4C4",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    iconCam: {
        width: 20,
        height: 20,
        opacity: 0.6,
    },
    txtNome: {
        color: "#000",
        fontSize: wp("4.5%"),
        fontWeight: "bold",
        marginLeft: wp("6%"),
    },
    opcao: {
        padding: wp("4%"),
        borderBottomWidth: 1,
        borderColor: "#C3C3C3"
    },
    txtOpcao:{
        color: "#FFF",
        fontSize: wp("5%"),
        fontWeight: "bold",
    }
})