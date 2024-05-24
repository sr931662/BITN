// import { View, Text, StyleSheet } from 'react-native'
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import { useFonts } from 'expo-font'
import { TouchableOpacity } from 'react-native'

const Welcome = ({navigation}) => {

  // global state
  const [state] = useContext(AuthContext)
  let [fontsLoading] = useFonts({
    'Josefin Bold': require('../../../assets/fonts/JosefinSans-Bold.ttf'),
    'Josefin': require('../../../assets/fonts/JosefinSans-Regular.ttf'),
    'Sansita Black': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Black.ttf'),
    'Sansita Bold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Bold.ttf'),
    'Sansita Extrabold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-ExtraBold.ttf'),
    'Sansita Light': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Light.ttf'),
    'Sansita Medium': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Medium.ttf'),
    'Sansita SemiBold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-SemiBold.ttf'),
    'Sansita': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Regular.ttf')
  })

  const handleNext = () => {
    navigation.navigate("Home")
  }
  const handlePrev = () => {
    navigation.navigate("Welcome")
  }

  const userName = state && state.user ? state.user.name : 'Guest'

  if (!fontsLoading) {
    return null
  }

  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <Image source={require("../../../assets/image.png")} style={styles.logo}/>
            <Text style={styles.mainText}>Birla Institute of Technology, MESRA, Noida off campus's App</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prevButton} onPress={handlePrev}>
            <Text style={styles.prev}>Prev</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1A212E",
    padding: 15
  },
  main: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logo: {
    margin: 'auto',
    marginBottom: 20
  },
  mainText : {
    color: '#38D9A9',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Josefin'
  },
  greetings : {
    color: 'white',
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    fontFamily: 'Josefin Bold'
  },
  nextButton : {
    width: 50,
    backgroundColor: '#38D9A9',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  next: {
    textAlign: 'center',
    fontFamily: 'Sansita Bold',
    fontSize: 16
  },
  prevButton : {
    width: 50,
    backgroundColor: '#38D9A9',
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    left: 25
  },
  prev : {
    textAlign: 'center',
    fontFamily: 'Sansita Bold',
    fontSize: 16
  }
})

export default Welcome