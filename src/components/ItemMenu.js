import React from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native'

export default function ItemMenu(props){
    const { title, titleStyle, icon, iconStyle, styleItem, styleContainer, underlayColor, onPress } = props

    return(
        <View>
            <TouchableHighlight style={styleContainer} underlayColor={underlayColor} onPress={onPress}>
                <View style={styleItem}>
                    <Image
                        style={iconStyle}
                        source={icon}
                    />
                    <Text style={titleStyle}>{title}</Text>
                </View> 
            </TouchableHighlight>
        </View>
    )
}