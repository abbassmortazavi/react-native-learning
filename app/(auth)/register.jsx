import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
    function handelSubmit() {
        alert('register button pressed')
        console.log('register button pressed')
    }
  return (
   <ThemedView style={styles.container}>
    <Spacer/>
    <ThemedText title={true} style={styles.title}>
        Register Page
    </ThemedText>

    <ThemedButton onPress={handelSubmit} labelName="register" txtStyle={styles.text}/>

    <Spacer height={100}/>
    <Link href="/login">
        <ThemedText style={{ textAlign: 'center' }}>
            Login Instead
        </ThemedText>
    </Link>




   </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
     title : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
     text: {
        color: '#f2f2f2',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})