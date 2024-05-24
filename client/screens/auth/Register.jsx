import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Forms/InputBox'
import axios from 'axios'
import SubmitButton from '../../components/Forms/SubmitButton'

const Register = ({ navigation }) => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ loading, setLoading ] = useState(false)


    const handleSubmit = async () => {
        try {
            setLoading(true)
            if (!name || !email || !pass) {
                Alert.alert("Please fill all the fields")
                setLoading(false)
                return;
            }
            setLoading(false)
            const { data } = await axios.post("/auth/register",
                {name, email, pass})
            alert(data && data.message)
            console.log('Register data ==> ', {name, email, pass})

        }
        catch (err) {
            alert(err.response.data.message)
            setLoading(false)
            console.log(err)
        }
    }
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/image.png")} alt='BIT logo' style={styles.logo} />
            <Text style={styles.titleHeader}>Register</Text>
            <View style={{ marginHorizontal: 20}}>
                <InputBox 
                inputTitle={'Full Name :'}
                value={name}
                setValue={setName} />

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
            <Text style={styles.already}>Already have a registered account ? <Text style={styles.link} onPress={() => navigation.navigate("Login")} >Login</Text></Text>
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
    titleHeader : {
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
    inputBox : {
        height: 30,
        marginBottom: 20,
        backgroundColor: '#FFF',
        borderRadius: 25,
        marginTop: 20,
        color: "#1A212E",
        paddingLeft: 10
    },
    link : {
        color: '#F29E30',
        fontSize: 18,
        fontWeight: '800'
    },
    already : {
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

export default Register