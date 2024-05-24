// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Welcome from './auth/welcome/Welcome';
// import Welcome_2 from './auth/welcome/Welcome_2';
// import Home from './auth/Main/Home';
// import { AuthProvider } from '../context/authContext';
// import NavBar from './auth/NavBar';
// import Profile from './auth/Main/Profile';
// import Report from './auth/Main/Report';
// import Nearby from './auth/Main/Nearby';
// import Notification from './auth/Main/Notification';

// const Stack = createNativeStackNavigator();

// export default function LoggedIn() {
//   return (
//     <>
//       <StatusBar />
//       <NavigationContainer>
//         <AuthProvider>
//           <Stack.Navigator
//             initialRouteName="Login"
//             screenOptions={{ headerShown: false, animation: 'ios' }}>
//             <Stack.Screen name='Profile' component={Profile} />
//             <Stack.Screen name='Report' component={Report} />
//             <Stack.Screen name='Nearby' component={Nearby} />
//             <Stack.Screen name='Notification' component={Notification} />
//             <Stack.Screen name='Welcome' component={Welcome} />
//             <Stack.Screen name='Welcome-2' component={Welcome_2} />
//             <Stack.Screen name='Home' component={Home} />
//           </Stack.Navigator>
//           <NavBar />
//         </AuthProvider>
//       </NavigationContainer>
//     </>
//   )
// }

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './auth/welcome/Welcome';
import Welcome_2 from './auth/welcome/Welcome_2';
import Home from './auth/Main/Home';
import Profile from './auth/Main/Profile';
import Report from './auth/Main/Placement';
import Nearby from './auth/Main/Nearby';
import Print from './auth/Main/Print';
import NavBar from './auth/NavBar';

const Stack = createNativeStackNavigator();

export default function LoggedIn() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false, animation: 'ios' }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Report' component={Report} />
        <Stack.Screen name='Nearby' component={Nearby} />
        <Stack.Screen name='Print' component={Print} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Welcome-2' component={Welcome_2} />
      </Stack.Navigator>
      <NavBar />
    </>
  );
}
