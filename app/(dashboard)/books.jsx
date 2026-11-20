import { FlatList, StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'
import { useBook } from '../../hooks/useBook'
import { useEffect } from 'react'
import { Pressable } from 'react-native'
import { Colors } from '../../constants/colors'

const Books = () => {
    const { books } = useBook();

    return (
        <ThemedView style={styles.container} safe={true}>
            <ThemedText title={true} style={styles.heading}>
                Your Reading Lists
            </ThemedText>
            <Spacer />



            <FlatList
                data={(books ?? []).filter(Boolean)}
                keyExtractor={(item) => String(item.id)}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <Pressable>
                        <ThemedCard style={styles.card}>
                            <ThemedText style={styles.title}>{item.title}</ThemedText>
                            <ThemedText>Writen By: {item.author}</ThemedText>
                        </ThemedCard>
                    </Pressable>
                )}
            />
        </ThemedView>
    )
}

export default Books

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
    list: {
        marginTop: 40
    },
    card: {
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    }
})