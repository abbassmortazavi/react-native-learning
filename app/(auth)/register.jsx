import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/colors'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { user, register } = useUser()
    const [error, setError] = useState('')
    const handelSubmit = async () => {
        setError(null);
        try {
            await register(email, password, name)
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register Page
            </ThemedText>

            {error  && <Text style={styles.error}>{error}</Text>}
            <Spacer/>

            <ThemedTextInput placeholder="ٍEmail"
                style={{
                    width: "80%",
                    marginBottom: 15
                }}
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />

            <ThemedTextInput placeholder="Name"
                style={{
                    width: "80%",
                    marginBottom: 15
                }}
                onChangeText={setName}
                value={name}
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

            <ThemedButton onPress={handelSubmit} labelName="register" txtStyle={styles.text} />

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: 'center' }}>
                    Login Instead
                </ThemedText>
            </Link>




        </ThemedView>

        </TouchableWithoutFeedback>
    )
}

export default Register

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
    text: {
        color: '#f2f2f2',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }
})

//7:33 =>15