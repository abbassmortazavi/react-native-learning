import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from './components/ThemedView'
import ThemedText from './components/ThemedText'


const About = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText>About</ThemedText>
        <Link  style={[styles.link, {marginTop: 15}]} href="/">
            <ThemedText>Home Page</ThemedText>
        </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})