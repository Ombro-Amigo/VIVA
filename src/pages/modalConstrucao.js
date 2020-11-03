import React from 'react'
import { StyleSheet, Text, View, Modal, Alert, TouchableHighlight, Image } from 'react-native'
import Botao from '../components/Botao'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ModalConstrucao({modalVisible, setModalVisible}) {
   return (
      <View>
         <Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
               onRequestClose={() => setModalVisible(!modalVisible)}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
                     <Text style={styles.title}>PÁGINA EM CONSTRUÇÃO</Text>
                     <Image
                        style={styles.icone}
                        source={require('../assets/icon/construcao.png')}
                     />
							<Text style={styles.modalText}>Ainda estamos apertando alguns parafusos por aqui!</Text>

							<TouchableHighlight
                        onPress={() => setModalVisible(!modalVisible)}
							>
                        <Botao
                           title="OK!"
                           style={styles.closeButton}
                        />
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
      </View>
   )
}

const styles = StyleSheet.create({
   title: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: wp("6%"),
      fontWeight: 'bold',
   },
   icone: {
      width: 100,
      height: 100,
      aspectRatio: 1
   },
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
   },
   modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
   },
   closeButton: {
		paddingHorizontal: wp("25%"),
		paddingVertical: hp("2%"),
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: wp("5%"),
   },
})
