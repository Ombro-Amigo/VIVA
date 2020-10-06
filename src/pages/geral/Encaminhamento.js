// import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Encaminhamento() {
  return (
    <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>O QUE DESEJA?</Text>
        </View>

        <View style={styles.containerLogin}>
            <View style={styles.containerTxtLogin}>
                <Text style={styles.txtLogin}>Seguir para as opções de login</Text>
            </View>
            <View style={styles.containerButtonLogin}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.txtButtonLogin}>Paciente</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.txtButtonLogin}>Psicólogo</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.containerEmergency}>
            <TouchableOpacity style={styles.buttonEmergency}>
                <Text style={styles.txtButtonEmergency}>Ligar para a Emergência</Text>
                <Image
                    style={styles.imageEmergency}
                    source={require('../../../assets/icon_phone_emergency.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txtEmergency}>Clique aqui para saber mais{"\n"}sobre a ligação de emergência</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6EB4E7',
    },

    // Título
    containerTitle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#f00',
    },
    title: {
        color: '#186794',
        fontWeight: 'bold',
        fontSize: 24,
    },

    // Login
    containerLogin: {
        flex: 2,
        // backgroundColor: '#0f0',
    },
    containerTxtLogin: {
        alignItems: 'center',
        // flex: 1,
    },
    txtLogin: {
        color: '#186794',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 20,
    },
    containerButtonLogin: {
        // flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonLogin: {
        backgroundColor: '#34C5A2',
        paddingVertical: 15,
        paddingHorizontal: 45,
        paddingVertical: 17,
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
    txtButtonLogin: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // Emergência
    containerEmergency: {
        flex: 3,
        alignItems: 'center',
        // backgroundColor: '#00f',
    },
    buttonEmergency: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: '#D4CA03',
        paddingVertical: 10,
        paddingHorizontal: 32,
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
    txtButtonEmergency: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 30,
    },
    imageEmergency: {
        width: 35,
        height: 35,
        aspectRatio: 1,
    },
    txtEmergency: {
        marginTop: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
});