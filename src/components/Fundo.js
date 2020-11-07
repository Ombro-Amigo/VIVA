import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Fundo(props) {
   const { children } = props;
   return (
      <View style={styles.container}>
         {children}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: wp("4%"),
      backgroundColor: "#6EB4E7",
   },
})
