import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AuthContext } from '../../../context/authContext';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getImageUrl from '../../../utils';
import NavBar from '../NavBar';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Profile = () => {
  const [state, setState] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation()

  useEffect(() => {
      const checkUser = async () => {
          const userData = await AsyncStorage.getItem('@auth');
          if (userData) {
              const parsedData = JSON.parse(userData);
              setState({ user: parsedData.user, token: parsedData.token });
          } else {
              navigation.navigate("Login");
          }
          setLoading(false);
      };
      checkUser();
  }, []);

  useEffect(() => {
      if (!state.user) {
          navigation.navigate("Login");
      }
  }, [state.user]);

  

  const userName = state.user ? state.user.name : 'Guest';
  const userID = state.user ? state.user.email : 'Guest_id';

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

  const profilePic = "../../../assets/accounts/Guest_id/Sample profile pic.png"
  const handleLogout = async () => {
      await AsyncStorage.removeItem('@auth');
      setState({ user: null, token: "" });
      navigation.navigate("Login");
  };

  if (loading || !fontsLoaded) {
      return (
          <View style={styles.container}>
              <ActivityIndicator size="large" color="#38D9A9" />
          </View>
      );
  }
  return (
    <View style={styles.container}>

    <View style={styles.campus_pic}>
        <Image source={require("../../../assets/BIT-Noida.jpg")} style={styles.camp}/>
        {/* <Image source={{uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}} style={styles.camp}/> */}
    </View>
      
      <View style={styles.Intro}>
        <Image source={require(profilePic)} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.name}>
                <Text style={styles.greetings}>{userName}</Text>
            </View>
            
            <View style={styles.email}>
                <Text style={styles.greetings}>{userID}</Text>
            </View>
            
            <View style={styles.rollno}>
                <Text style={styles.greetings}>BCA/45009/20</Text>
            </View>
            
            <View style={styles.branch}>
                <Text style={styles.greetings}>Noida Branch</Text>
            </View>
        </View>
      </View>
      
      <View style={styles.graph2}>
        <View style={styles.box}>
            <Image source={require('../../../assets/curriculum.png')} style={styles.prt} />
            <Text style={styles.prtt}>Syllabus</Text>
        </View>
        <View style={styles.box}>
            <Image source={require('../../../assets/attendance.png')} style={styles.prt} />
            <Text style={styles.prtt}>Time Table</Text>

        </View>
      </View>
      
      <View style={styles.graph3}>
        <View style={styles.box}>
            <Image source={require('../../../assets/working.png')} style={styles.prt} />
            <Text style={styles.prtt}>Course Structure</Text>

        </View>
        <View style={styles.box}>
            <Image source={require('../../../assets/mission.png')} style={styles.prt} />
            <Text style={styles.prtt}>Fees Structure</Text>

        </View>
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
  Intro : {
    backgroundColor: '#313F5C',
    height: windowHeight * 0.2,
    width: windowWidth * 0.8,
    borderRadius: 20,
    marginTop: windowHeight * 0.15,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  main: {
      color: '#61abfc',
      fontSize: 35,
      textAlign: 'center',
      fontFamily: 'Sansita Black',
  },
  nextButton: {
      backgroundColor: '#61abfc',
      paddingVertical: 5,
      paddingHorizontal: 20,
      borderRadius: 50,
      position: 'absolute',
      bottom: 25,
      right: 25
  },
  next: {
      textAlign: 'center',
      fontFamily: 'Sansita Bold',
      color: 'white',
      fontSize: 16
  },
  logout: {
      backgroundColor: '#fff',
      paddingVertical: 2,
      paddingHorizontal: 2,
      borderRadius: 50,
      position: 'absolute',
      top: 45,
      right: 12.5
  },
  lout : {
      width: 35,
      height: 35
  },
  campus_pic : {
      position: 'absolute',
      top: 0
  },
  camp: {
      width: windowWidth * 1,
      height: windowHeight * 0.3
  },
  prof : {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#1A212E',
      top: -50,
      marginHorizontal: 'auto', 
      borderColor: 'skyblue',
      borderWidth: 2.5
  },
  BaseInfo : {
      backgroundColor: '#1A212E',
      width: windowWidth * 0.75,
      margin: 'auto',
      height: windowHeight * 0.11,
      top: -20,
      borderRadius: 20,
  },
  greetings: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Josefin',
      marginTop: 'auto',
      marginBottom: 'auto'
  },
  name: {
      backgroundColor: '#313F5C',
      width: windowWidth *0.32,
      position: 'absolute',
      height: 30,
      borderRadius: 20,
      top: 10,
      left: 10
  },
  email: {
      backgroundColor: '#313F5C',
      width: windowWidth *0.32,
      height: 30,
      borderRadius: 20,
      position:'absolute',
      right: 10,
      top: 10
  },
  rollno: {
      backgroundColor: '#313F5C',
      width: windowWidth *0.32,
      position: 'absolute',
      height: 30,
      borderRadius: 20,
      top: 50,
      left: 10
  },
  branch: {
      backgroundColor: '#313F5C',
      width: windowWidth *0.32,
      height: 30,
      borderRadius: 20,
      position:'absolute',
      right: 10,
      top: 50
  },
  graph1 : {
      backgroundColor: '#313F5C',
      width: windowWidth * 0.9,
      height: windowHeight * 0.4,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: 'skyblue',
      position: 'relative',
      marginTop: 30,
      marginLeft: 'auto',
      marginRight: 'auto'
  },
  graph2: {
      // backgroundColor: '#313F5C',
      width: windowWidth * 0.9,
      height: windowHeight * 0.25,
      position: 'relative',
      marginTop: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
      flex: 1,
      flexDirection: 'row',
  },
  
  graph3: {
      // backgroundColor: '#313F5C',
      width: windowWidth * 0.9,
      height: windowHeight * 0.25,
      position: 'relative',
      marginTop: 30,
      marginLeft: 'auto',
      marginRight: 'auto',
      flex: 1,
      flexDirection: 'row',
  },
  box: {
      width: '40%',
      height: '100%',
      borderWidth: 2,
      borderColor: 'skyblue',
      borderRadius: 15,
      backgroundColor: '#313F5C',
      marginLeft: 'auto',
      marginRight: 'auto'
  },
  prt : {
      width: '70%',
      height: '45%',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 10
  },
  prtt : {
      fontSize: 16,
      color: 'white',
      margin: 'auto'
  }
})
export default Profile