import React, { createContext, useState, useEffect } from 'react';
// import '@firebase/auth';

// import { useFonts, Signika_400Regular, Signika_700Bold } from '@expo-google-fonts/signika';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const FontContext = createContext({
   fontStyles: StyleSheet.create({}),
});

export const FontProvider = ({ children }) => {
   // useEffect(() => {
   // });
   // let [fontsLoaded] = useFonts({
   //    Signika_400Regular,
   //    Signika_700Bold,
   // });

   const fontStyles = fontsLoaded ?
   StyleSheet.create({
      title1: {
         color: '#186794',
         // fontWeight: 'bold',
         fontSize: wp("7%"),
         // fontFamily: 'Signika_700Bold'
      },
      spam: {
         color: '#186794',
         // fontWeight: 'bold',
         fontSize: wp("5%"),
         marginBottom: hp("3.2%"),
         textAlign: 'center',
         // fontFamily: 'Signika_700Bold'
      },
   }) :
   {}


   return (
      <FontContext.Provider value={fontStyles}>
         {children}
      </FontContext.Provider>
   );
}

export default FontContext;