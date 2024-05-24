import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({ inputTitle, autoComplete, secureTextEntry, value, setValue }) => {
  return (
    <View>
        <Text style={styles.labelz}>{inputTitle}</Text>
        <TextInput 
        style={styles.inputBox} 
        autoComplete={autoComplete} 
        secureTextEntry={secureTextEntry} 
        autoCorrect={false}
        value={value}
        onChangeText={(text) => setValue(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
    
    labelz: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    inputBox : {
        height: 30,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        marginTop: 20,
        color: "#1A212E",
        paddingLeft: 10
    }
})

export default InputBox