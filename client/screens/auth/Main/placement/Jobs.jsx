import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import Placement_nav from '../placement_nav'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Placement = () => {
  const profilePic = "../../../assets/accounts/Guest_id/Sample profile pic.png"
  return (
    <View style={styles.container}>
      <Text style={{color: '#61abfc', top: 50, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Sansita Bold', fontSize: 30}}>Job listings</Text>

    <ScrollView >
      <View style={styles.Intro_first}>
        <Image source={require("../../../../assets/company.png")} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Company name 1</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Skills required sections</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Experience required</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Salary range</Text>
            </View>
        </View>
        
      </View>

      <View style={styles.Intro}>
        <Image source={require('../../../../assets/company.png')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Company name 2</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Skills required sections</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Experience required</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Salary range</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.Intro}>
        <Image source={require('../../../../assets/company.png')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Company name 3</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Skills required sections</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Experience required</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Salary range</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.Intro}>
        <Image source={require('../../../../assets/company.png')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Company name 4</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Skills required sections</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Experience required</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Salary range</Text>
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
export default Placement