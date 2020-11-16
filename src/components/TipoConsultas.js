import React, {Component, useState} from 'react'
import {Text, View, StyleSheet} from "react-native"
import {RadioButton} from "react-native-paper"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


const TipoConsultas = ({ onValueChange, value, error }) => {
    const [escolha, setEscolha] = useState("Gratuita")

    return (
		 <>
			<RadioButton.Group onValueChange={onValueChange} value={value}>
					<View style={styles.areaEscolha}>
						<View style={styles.escolha}>
							<RadioButton value="Gratuita" color="#34C5A2"/>
							<Text style={styles.txtOpcoes}>Gratuita</Text>
						</View>
						<View style={styles.escolha} >
							<RadioButton value="Paga" color="#34C5A2"/>
							<Text style={styles.txtOpcoes}>Paga</Text>
						</View>
					</View>
			</RadioButton.Group>


				<View style={styles.areaMsgError}>
					{error && <Text style={styles.msgError}>{error}</Text>}
				</View>
		</>
    )
}

export default TipoConsultas

const styles = StyleSheet.create({
    areaEscolha: {
        flexDirection: "row",
        marginTop: hp("2%"),
        borderStyle: "solid",
        justifyContent: "space-around",
        borderWidth: wp("0.8%"),
        borderColor: "#80C6F9",
        borderRadius: 10,
        padding: wp("1.5%"),
    },
    escolha: {
        flexDirection: "row",
        alignItems: "center",
    },
    txtOpcoes: {
        fontSize: wp("5%"),
        fontWeight: "bold",
	 },
	 msgError: {
		 color: '#f00'
	 }
})
