import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
    const { logout, user } = useUser()
    return (
        <ThemedView style={styles.container} safe={true}>
            <ThemedText title={true} style={styles.heading}>
                {user && user.email}
            </ThemedText>
            <Spacer />

            <ThemedText title={true} style={styles.heading}>
               Time To start reading some books...
            </ThemedText>
            <Spacer />
            <ThemedButton onPress={logout} labelName="Logout" txtStyle={styles.btnColor}/>
        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: "#a0dea2"
    },
    btnColor: {
        color: '#f2f2f2'
    }
})