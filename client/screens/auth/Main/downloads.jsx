import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Downloads = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Download Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1A212E'
    },
    main : {
        color: 'white',
        margin: 'auto'
    }
})

export default Downloads