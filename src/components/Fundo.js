import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

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
      padding: 15,
      backgroundColor: "#6EB4E7",
   },
})
