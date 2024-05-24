import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const SubmitButton = ({handleSubmit, btnTitle, loading}) => {
  return (
    <TouchableOpacity style={styles.SubmitButton} onPress={handleSubmit}>
        <Text style={styles.btnText}>{loading ? 'Loading ...' : btnTitle}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    SubmitButton: {
        width: '30%',
        height: '10%',
        backgroundColor: "#C58595",
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10
    },
    btnText: {
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SubmitButton