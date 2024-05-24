import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const Print = () => {
  return (
    <View style={styles.container}>

    <View style={styles.campus_pic}>
        <Image source={require("../../../assets/4197232.jpg")} style={styles.camp}/>
        {/* <Image source={{uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}} style={styles.camp}/> */}
    </View>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Scan Image</Text>
      </TouchableOpacity>
      
      <ScrollView horizontal style={styles.graph2}>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#1A212E",
  },
  campus_pic: {
    top: 35, 
    height: windowHeight * 0.6,
    width: windowWidth *1,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  camp: {
    height : '100%',
    width: '100%'
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})
export default Print