import { StyleSheet,View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{ backgroundColor: theme.uiBackground }, styles.card, style]} {...props}/>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
     card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})