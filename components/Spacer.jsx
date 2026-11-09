
import { View, StyleSheet } from 'react-native'

const Spacer = ({width= "100%", height= 40}) => {
  return (
    <View style={{width: width, height: height}}/>
  )
}

export default Spacer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})