import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/android-icon-foreground.png'

const Home = () => {
  return (
    <View style={styles.container}>
    <Image source={Logo} style={{width: 100, height: 100}} />
      <Text style={[styles.title, {color: '#000'}]}>Home</Text>
      <Text>The Numebr 1</Text>
      <Text style={{marginTop: 10, marginBottom: 50}}>The Numebr 2</Text>
      <Text>Mina is My Love</Text>
      <View style={styles.card}>
        <Text>Hello this is Card!</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9c4cc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
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
    }
})