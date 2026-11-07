import { useColorScheme, Image } from 'react-native'


import DarkLogo from '../../assets/logo_dark.png'
import LightLogo from '../../assets/logo_light.png'
const ThemedLogo = () => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo    
  return (
    <Image source={logo} style={{width: 100, height: 100}} />
  )
}

export default ThemedLogo