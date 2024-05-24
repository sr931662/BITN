import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useNavigationState } from '@react-navigation/native'

const Placement_nav = () => {
    const navigation = useNavigation()


    const useCurrentRoute = () => {
        const state = useNavigationState(state => state);
        return state?.routes[state.index]?.name || '';
      };
    const currentRoute = useCurrentRoute()

    const isActive = (routeName) => currentRoute === routeName

    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Placement') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Placement')}}
            >
                <Text style={[styles.navText, isActive('Placement') && styles.activeNavText]}>Placement</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Alumni') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Alumni')}}
            >
                <Text style={[styles.navText, isActive('Alumni') && styles.activeNavText]}>Alumni</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Jobs') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Jobs')}}
            >
                <Text style={[styles.navText, isActive('Jobs') && styles.activeNavText]}>Jobs</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2C3E50',
    paddingVertical: 10,
  },
  navItem: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeNavItem: {
    backgroundColor: '#1ABAff', // Highlight background color
  },
  activeNavText: {
    color: '#000000', // Highlight text color
  },
})

export default Placement_nav

