import { View, Text, StyleSheet, ActivityIndicator, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useFonts } from 'expo-font';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const Nearby = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded] = useFonts({
      'Josefin Bold': require('../../../assets/fonts/JosefinSans-Bold.ttf'),
      'Josefin': require('../../../assets/fonts/JosefinSans-Regular.ttf'),
      'Sansita Black': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Black.ttf'),
      'Sansita Bold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Bold.ttf'),
      'Sansita Extrabold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-ExtraBold.ttf'),
      'Sansita Light': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Light.ttf'),
      'Sansita Medium': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Medium.ttf'),
      'Sansita SemiBold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-SemiBold.ttf'),
      'Sansita': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', marginTop: 50, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Josefin Bold', position: 'relative'}}>Nearby Amenities</Text>
      <View style={styles.map}>
        <Image source={require('../../../assets/map.png')} style={styles.mappic} />
      </View>
      <View style={styles.list}>
        <Text style={styles.header}>Locations</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.title}>Location 1</Text>
            <Text style={styles.description}>A very long address on google map.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.title}>Location 2</Text>
            <Text style={styles.description}>A very long address on google map.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.title}>Location 3</Text>
            <Text style={styles.description}>A very long address on google map.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.title}>Location 4</Text>
            <Text style={styles.description}>A very long address on google map.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.title}>Location 5</Text>
            <Text style={styles.description}>A very long address on google map.</Text>
          </TouchableOpacity>
          {/* Add more static notification items as needed */}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#1A212E",
    padding: 15
  },
  map : {
    width: '100%',
    height: windowHeight * 0.5,
    borderRadius: 25,
    position: 'relative',
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mappic : {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  list : {
    backgroundColor: '#313F5C',
    width: '100%',
    height: windowHeight *0.28,
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 20,
    borderWidth: 2,
    borderColor: 'skyblue'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },
  scrollViewContent: {
    paddingBottom: 20,
    borderRadius: 20
  },
  notificationItem: {
    backgroundColor: '#1A212E',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
})

export default Nearby