import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import Placement_nav from '../placement_nav'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Alumni = () => {
  const profilePic = "../../../../assets/accounts/Guest_id/Sample profile pic.png"
  return (
    <View style={styles.container}>
      <Text style={{color: '#61abfc', top: 50, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Sansita Bold', fontSize: 30}}>Notable Alumni</Text>

    <ScrollView >
      <View style={styles.Intro_first}>
        <Image source={require("../../../../assets/accounts/Guest_id/Abhishek Sinha.png")} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Mr. Abhishek Sinha</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Co-founder at Eko</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>BE, ECE in batch 1999</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Gurugram, Haryana, India</Text>
            </View>
        </View>
        
      </View>

      <View style={styles.Intro}>
        <Image source={require('../../../../assets/Alok.jpg')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Alok Chakravarty</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Prof. & Director, ISEEK</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>BSc, Mech. Eng. batch 1980</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Location</Text>
            </View>
        </View>
        
        
      </View>
      <View style={styles.Intro}>
        <Image source={require('../../../../assets/Amit.jpg')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Amit Kumar Sinha</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>BE, EEE batch 1990-94</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>CEO/MD, Mahindra LifeSpace Development</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Gurugram, Haryana, India</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.Intro}>
        <Image source={require(profilePic)} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Name</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Email</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Roll number</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Noida Branch</Text>
            </View>
        </View>
        
      </View>
      </ScrollView>
      <Placement_nav />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#1A212E",
    padding: 15
  },
  Intro_first : {
    backgroundColor: '#313F5C',
    height: windowHeight * 0.2,
    width: windowWidth * 0.8,
    borderRadius: 20,
    marginTop: windowHeight * 0.1,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  Intro : {
    backgroundColor: '#313F5C',
    height: windowHeight * 0.2,
    width: windowWidth * 0.8,
    borderRadius: 20,
    marginTop: windowHeight * 0.05,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  main: {
      color: '#61abfc',
      fontSize: 35,
      textAlign: 'center',
      fontFamily: 'Sansita Black',
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
  prof : {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#1A212E',
      borderColor: 'skyblue',
      borderWidth: 2.5,
      left: 20,
      top: 35
  },
  BaseInfo : {
      // backgroundColor: 'white',
      backgroundColor: '#1A212E',
      width: windowWidth * 0.45,
      height: '90%',
      position: 'absolute',
      borderRadius: 20,
      right: 10,
      left: 'auto',
      top: 10
  },
  greetings: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Josefin',
      marginTop: 'auto',
      marginBottom: 'auto'
  },
  info: {
    width: 'auto',
    marginVertical: 7.5,
    borderRadius: 5,
    margin: 'auto',
    marginTop: 10
  },
})
export default Alumni