import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import ThemedButton from '../../components/ThemedButton'
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/colors'


const Login = () => {
    const { user, login } = useUser()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        console.log('user changed:', user);
    }, [user])





    const handelSubmit = async () => {
        setError(null);
        try {
            if (!email.trim() || !password) {
                setError('Please enter email and password');
                return;
            }
            await login(email, password)
            console.log('login successful:', user)
        } catch (error) {
            setError(error.message)
        }

    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Login Page
                </ThemedText>

                {error && <Text style={styles.error}>{error}</Text>}
                <Spacer />

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
        </TouchableWithoutFeedback>
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