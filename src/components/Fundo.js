import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Fundo(props) {
   const { children, padding } = props;
   return (
      <View style={[styles.container, {padding: padding !== null ? wp("4%") : padding}]}>
         {children}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#6EB4E7",
   },
})
