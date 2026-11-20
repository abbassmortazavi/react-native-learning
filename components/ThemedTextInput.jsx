import { StyleSheet, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/colors'

const ThemedTextInput = ({style, multiline, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <TextInput
        multiline={multiline}
        style={[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 6,
            },
            style
            
        ]}
        {...props}
    />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})