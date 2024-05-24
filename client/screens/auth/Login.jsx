import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import InputBox from '../../components/Forms/InputBox'
import SubmitButton from '../../components/Forms/SubmitButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { AuthContext } from '../../context/authContext'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(false)
    const [state, setState] = useContext(AuthContext)


    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const userData = await AsyncStorage.getItem('@auth')
                if (userData) {
                    const userHasSeenWelcome = await AsyncStorage.getItem('@hasSeenWelcome')
                    if (userHasSeenWelcome) {
                        navigation.navigate("Home")
                    } else {
                        navigation.navigate("Welcome")
                    }
                }
            } catch (error) {
                console.log('Error checking logged in status:', error)
            }
        }
        checkLoggedIn()
    }, [])

    const handleSubmit = async () => {
        try {
            setLoading(true)
            if (!email || !pass) {
                Alert.alert("Please fill all the fields")
                setLoading(false)
                return;
            }
            setLoading(false)
            const { data } = await axios.post("/auth/login",
                { email, pass }
            )
            setState(data) // setting latest logged in user's data
            await AsyncStorage.setItem('@auth', JSON.stringify(data))
            alert(data && data.message)
            // navigation.navigate("Welcome")
            console.log('Login data ==> ', { email, pass })
            const userHasSeenWelcome = await AsyncStorage.getItem('@hasSeenWelcome')
            if (userHasSeenWelcome) {
                navigation.navigate("Home")
            } else {
                await AsyncStorage.setItem('@hasSeenWelcome', 'true')
                navigation.navigate("Welcome")
            }
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
    }
    
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/image.png")} alt='BIT logo' style={styles.logo} />
            <Text style={styles.titleHeader}>Login</Text>
            <View style={{ marginHorizontal: 20 }}>

                <InputBox
                    inputTitle={'Email :'}
                    keyboardType='email-address'
                    autoComplete="email"
                    value={email}
                    setValue={setEmail} />

                <InputBox
                    inputTitle={'Password :'}
                    secureTextEntry={true}
                    autoComplete="password"
                    value={pass}
                    setValue={setPass} />

                <SubmitButton btnTitle={'Submit'}
                    loading={loading}
                    handleSubmit={handleSubmit} />
            </View>
            <Text style={styles.already}>Don't have a registered account ? <Text style={styles.link} onPress={() => navigation.navigate("Register")} >Register</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#1A212E",
        padding: 30
    },
    titleHeader: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },
    labelz: {
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    inputBox: {
        height: 30,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        marginTop: 20,
        color: "#1A212E",
        paddingLeft: 10
    },
    link: {
        color: '#F29E30',
        fontSize: 18,
        fontWeight: '800'
    },
    already: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white'
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
        width: 70,
        height: 70
    }
})

export default Login