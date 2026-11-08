import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from './components/ThemedView'
import ThemedCard from './components/ThemedCard'
import ThemedLogo from './components/ThemedLogo'
import Spacer from './components/Spacer'
import ThemedText from './components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo/>
      <ThemedText style={[styles.title]} title={true} >Home</ThemedText>
      <ThemedText>The Numebr 1</ThemedText>
      <Spacer/>
      <ThemedText>The Numebr 2</ThemedText>
      <Text>Mina is My Love</Text>
      <ThemedCard>
        <Text>Hello this is Card!</Text>
      </ThemedCard>
      <View>
        <Button title='test'>Please Click</Button>
      </View>

      <Link style={[styles.link, {marginTop: 15}]} href="/login">
          <ThemedText>Login</ThemedText>
      </Link>
      <Link style={[styles.link, {marginTop: 15}]} href="/register">
        <ThemedText>Register</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

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