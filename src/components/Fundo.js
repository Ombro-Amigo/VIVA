import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Fundo(props) {
   const { children, padding } = props;
   return (
		<TouchableWithoutFeedback onPress={() =>{Keyboard.dismiss()}}>
			<View style={[styles.container, {padding: padding !== null ? wp("4%") : padding}]}>
				{children}
			</View>
		</TouchableWithoutFeedback>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#6EB4E7",
   },
})
