import { Keyboard, StyleSheet, TouchableNativeFeedback } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'
import { useBook } from '../../hooks/useBook'

import Spacer from '../../components/Spacer'
import { useState } from 'react'
import { useRouter } from 'expo-router'

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('')
    const { createBook } = useBook();
    const router = useRouter()

    const handelSubmit = async () => {
        try {
            const data = {
                title,
                description,
                author,
            };
            await createBook(data);
            setAuthor('');
            setDescription('');
            setTitle('');
            router.replace("/books");
        } catch (error) {
            console.log('error', error)
            setError(error.message)
        }
    }


    return (
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container} safe={true}>
                <ThemedText title={true} style={styles.heading}>
                    Add New Book
                </ThemedText>
                <Spacer />
                <ThemedTextInput placeholder="Title"
                    style={{
                        width: "80%",
                        marginBottom: 15
                    }}
                    onChangeText={setTitle}
                    value={title}
                />
                
                <ThemedTextInput placeholder="Author"
                    style={{
                        width: "80%",
                        marginBottom: 15
                    }}
                    onChangeText={setAuthor}
                    value={author}
                />

                <ThemedTextInput placeholder="Description"
                    style={[{
                        width: "80%",
                        marginBottom: 30
                    }, styles.multiline]}
                    onChangeText={setDescription}
                    value={description}
                    multiline={true}
                />
                <ThemedButton onPress={handelSubmit} labelName="Add" txtStyle={styles.text} />
            </ThemedView>
        </TouchableNativeFeedback>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center'
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40
    }
})