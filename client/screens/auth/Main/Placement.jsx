import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import Placement_nav from './placement_nav'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Placement = () => {
  const profilePic = "../../../assets/accounts/Guest_id/Sample profile pic.png"
  return (
    <View style={styles.container}>
      <Text style={{color: '#61abfc', top: 50, marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Sansita Bold', fontSize: 30}}>Placement 2023</Text>

    <ScrollView >
      <View style={styles.Intro_first}>
        <Image source={require("../../../assets/Anjali mca.png")} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Ms. Anjali Sahu</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA/45042/21</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA (2021-2023)</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Threye Interactive</Text>
            </View>
        </View>
        
      </View>

      <View style={styles.Intro}>
        <Image source={require('../../../assets/Soumya.png')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Mr. Soumya Tiwari</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA/45003/21</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA (2021-2023)</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Threye Interactive</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.Intro}>
        <Image source={require('../../../assets/Pankaj.png')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Mr. Pankaj Kannavedia</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA/45013/21</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA (2021-2023)</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Threye Interactive</Text>
            </View>
        </View>
        
      </View>
      <View style={styles.Intro}>
        <Image source={require('../../../assets/Bharti.png')} style={styles.prof} onError={(e) => console.error(e)}/> 

        <View style={styles.BaseInfo}>
            <View style={styles.info}>
                <Text style={styles.greetings}>Ms. Bharti Chourasiya</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA/45043/21</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>MCA (2021-2023)</Text>
            </View>
            
            <View style={styles.info}>
                <Text style={styles.greetings}>Cognizant</Text>
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