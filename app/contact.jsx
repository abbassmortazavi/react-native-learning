import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from './components/ThemedView'
import ThemedText from './components/ThemedText'

const Contact = () => {
  return (
   <ThemedView style={[styles.container]}>
      <ThemedText>Contact</ThemedText>
        <Link  style={[styles.link, {marginTop: 15}]} href="/">
            <ThemedText>Home Page</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
    },
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
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})