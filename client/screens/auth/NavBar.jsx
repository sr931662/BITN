import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useNavigationState } from '@react-navigation/native'

const NavBar = () => {
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
                style={[styles.navItem, isActive('Profile') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Profile')}}
            >
                <Text style={[styles.navText, isActive('Profile') && styles.activeNavText]}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Placement') && styles.activeNavItem || isActive('Alumni') && styles.activeNavItem || isActive('Jobs') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Placement')}}
            >
                <Text style={[styles.navText, isActive('Placement') && styles.activeNavText || isActive('Alumni') && styles.activeNavText || isActive('Jobs') && styles.activeNavText]}>Placement</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Home') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Home')}}
            >
                <Text style={[styles.navText, isActive('Home') && styles.activeNavText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Print') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Print')}}
            >
                <Text style={[styles.navText, isActive('Print') && styles.activeNavText]}>Print</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.navItem, isActive('Nearby') && styles.activeNavItem]} 
                onPress={() => {navigation.navigate('Nearby')}}
            >
                <Text style={[styles.navText, isActive('Nearby') && styles.activeNavText]}>Nearby</Text>
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

export default NavBar











// import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'

// const windowHeight = Dimensions.get('window').height
// const windowWidth = Dimensions.get('window').width
 
// const NavBar = () => {
//     const navigation = useNavigation()
    
//     return (
        
//     <View style={styles.navbar}>
//     <TouchableOpacity style={styles.navItem} onPress={() => {navigation.navigate('Profile')}}>
//       <Text style={styles.navText}>Profile</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem} onPress={() => {navigation.navigate('Report')}}>
//       <Text style={styles.navText}>Report</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem} onPress={() => {navigation.navigate('Home')}}>
//       <Text style={styles.navText}>Home</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem} onPress={() => {navigation.navigate('Notification')}}>
//       <Text style={styles.navText}>Alert</Text>
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.navItem} onPress={() => {navigation.navigate('Nearby')}}>
//       <Text style={styles.navText}>Nearby</Text>
//     </TouchableOpacity>
//   </View>
//     )
// }

// const styles = StyleSheet.create({
    
//   navbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#2C3E50',
//     paddingVertical: 10,
//   },
//   navItem: {
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   navText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// })

// export default NavBar