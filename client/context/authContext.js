import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

// connect 
const AuthContext = createContext()

// provider
const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        token: "",
    })
    const [loading, setLoading] = useState(true)

    axios.defaults.baseURL = 'http://192.168.29.166:8080/api/v1'

    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem('@auth')
            let loginData = JSON.parse(data)
            setState({ ...state, user: loginData?.user, token: loginData?.token })
            setLoading(false)
        }
        loadLocalStorageData()
    }, [])

    if (loading) {
        return null // or a loading spinner
    }

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
