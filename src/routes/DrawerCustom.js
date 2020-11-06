import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AuthContext from '../contexts/auth/auth';

import {
   Avatar,
   Title,
   Caption,
   Paragraph,
   Drawer,
   Text,
   TouchableRipple,
   Switch
} from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function DrawerCustom(props) {
   const { setSignOut } = useContext(AuthContext);
   
   return (
      <View style={{flex:1}}>
         <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
               <View style={styles.userInfoSection}>
                  <View style={{flexDirection:'row', marginTop: 15}}>
                     <Avatar.Image 
                        source={require('../assets/icon/sair.png')}
                     />
                     <View style={{marginLeft:15,flexDirection:'column'}}>
                        <Title style={styles.title}>Usuário</Title>
                        <Caption style={styles.caption}>@user</Caption>
                     </View>
                  </View>

                  <View style={styles.row}>
                     <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                        <Caption>Following</Caption>
                     </View>
                     <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                        <Caption>Follower</Caption>
                     </View>
                  </View>
               </View>

               <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem
                     icon={() => (
                        <Image
                           style={styles.icon}
                           source={require('../assets/icon/sair.png')}
                        />
                     )}
                     label='Sign Out'
                     onPress={() => {}}
                  />
                  <DrawerItem
                     icon={() => (
                        <Image
                           style={styles.icon}
                           source={require('../assets/icon/sair.png')}
                        />
                     )}
                     label='Sign Out'
                     onPress={() => {}}
                  />
                  <DrawerItem
                     icon={() => (
                        <Image
                           style={styles.icon}
                           source={require('../assets/icon/sair.png')}
                        />
                     )}
                     label='Sign Out'
                     onPress={() => {}}
                  />
                  <DrawerItem
                     icon={() => (
                        <Image
                           style={styles.icon}
                           source={require('../assets/icon/sair.png')}
                        />
                     )}
                     label='Sign Out'
                     onPress={() => {}}
                  />
               </Drawer.Section>
               <Drawer.Section title="Preferencias">
                  <TouchableRipple>
                     <View style={styles.preferences}>
                        <Text>Dark Theme</Text>
                        <Switch />
                     </View>
                  </TouchableRipple>
               </Drawer.Section>
            </View>
         </DrawerContentScrollView>
         <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
               icon={() => (
                  <Image
                     style={styles.icon}
                     source={require('../assets/icon/sair.png')}
                  />
               )}
               label='Sign Out'
               onPress={() => setSignOut(true)}
            />
         </Drawer.Section>         
      </View>
   )
}

const styles = StyleSheet.create({
   drawerContent: {
      flex: 1,
   },
   userInfoSection: {
      paddingLeft: 20,
   },
   title: {
      fontSize: 10,
      marginTop: 3,
      fontWeight: 'bold',
   },
   caption: {
      fontSize: 14,
      lineHeight: 14,
   },
   row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
   },
   section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
   },
   paragraph: {
      fontWeight: 'bold',
      marginLeft: 3,
   },
   drawerSection: {
      marginTop: 20,
   },
   bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#eee',
      borderTopWidth: 1,
   },
   preferences: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
   },
   icon: {
      width: 20,
      aspectRatio: 1,
   }
});


export default DrawerCustom;