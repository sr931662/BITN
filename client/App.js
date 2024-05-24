import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/auth/Register';
import Login from './screens/auth/Login';
import Welcome from './screens/auth/welcome/Welcome';
import Welcome_2 from './screens/auth/welcome/Welcome_2';
import Home from './screens/auth/Main/Home';
import { AuthProvider } from './context/authContext';
import NavBar from './screens/auth/NavBar';
import Profile from './screens/auth/Main/Profile';
import Placement from './screens/auth/Main/Placement';
import Nearby from './screens/auth/Main/Nearby';
import Print from './screens/auth/Main/Print';
import Alumni from './screens/auth/Main/placement/Alumni';
import Jobs from './screens/auth/Main/placement/Jobs';
import Downloads from './screens/auth/Main/downloads';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false, animation: 'ios' }}>
            <Stack.Screen name='downloads' component={Downloads} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Alumni' component={Alumni} />
            <Stack.Screen name='Jobs' component={Jobs} />
            <Stack.Screen name='Placement' component={Placement} />
            <Stack.Screen name='Nearby' component={Nearby} />
            <Stack.Screen name='Print' component={Print} />
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Welcome-2' component={Welcome_2} /> 
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
          </Stack.Navigator>
          <NavBar />
        </AuthProvider>
      </NavigationContainer>
    </>
  )
}