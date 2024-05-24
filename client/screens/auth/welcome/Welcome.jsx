// import { View, Text, StyleSheet } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/authContext'
import { useFonts } from 'expo-font'
import { TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'

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

  const handleAction = () => {
    navigation.navigate("Welcome-2")

  }
  useEffect(() => {
    
    
    setTimeout(() => {Toast.show({
      type: 'success',
      text1: 'Welcome to BITN',
      text2: 'Hi, Mr. ' + userName,
      visibilityTime: 10000,
      backgroundColor: 'cyan'
  })}, 2000)
  })
  const userName = state && state.user ? state.user.name : 'Guest'
  if (!fontsLoading) {
    return null
  }
  return (
    <View style={styles.container}>
      <Toast />
      <Text style ={styles.main}>Welcome to BIT-Noida!</Text>
      <Text style={styles.greetings}>Hi, Mr. {userName}</Text>
      <TouchableOpacity style={styles.nextButton} onPress={handleAction}>
        <Text style={styles.next}>Next</Text>
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
  main : {
    color: '#38D9A9',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Sansita Black'
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
  }
})

export default Welcome