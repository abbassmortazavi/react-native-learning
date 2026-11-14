import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handelSubmit() {
        console.log('Login button pressed', email, password)
    }
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login Page
            </ThemedText>


            <ThemedTextInput placeholder="ٍEmail" 
            style={{
                width: "80%",
                marginBottom: 15
            }}
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <ThemedTextInput placeholder="Password"
                style={{
                    width: "80%",
                    marginBottom: 15
                }}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <ThemedButton onPress={handelSubmit} labelName="Login" txtStyle={styles.text} />


            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}>
                    Register Instead
                </ThemedText>
            </Link>




        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%'
    },
    text: {
        color: '#f2f2f2',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})