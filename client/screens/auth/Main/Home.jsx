import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image, Dimensions } from 'react-native';
import { AuthContext } from '../../../context/authContext';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getImageUrl from '../../../utils';
import NavBar from '../NavBar';
import { useNavigation } from '@react-navigation/native';
import Calendar from './minicomponents/Calender';


const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Home = () => {
    const [state, setState] = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation()

    useEffect(() => {
        const checkUser = async () => {
            const userData = await AsyncStorage.getItem('@auth');
            if (userData) {
                const parsedData = JSON.parse(userData);
                setState({ user: parsedData.user, token: parsedData.token });
            } else {
                navigation.navigate("Login");
            }
            setLoading(false);
        };
        checkUser();
    }, []);

    useEffect(() => {
        if (!state.user) {
            navigation.navigate("Login");
        }
    }, [state.user]);

    

    const userName = state.user ? state.user.name : 'Guest';
    const userID = state.user ? state.user.email : 'Guest_id';

    const [fontsLoaded] = useFonts({
        'Josefin Bold': require('../../../assets/fonts/JosefinSans-Bold.ttf'),
        'Josefin': require('../../../assets/fonts/JosefinSans-Regular.ttf'),
        'Sansita Black': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Black.ttf'),
        'Sansita Bold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Bold.ttf'),
        'Sansita Extrabold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-ExtraBold.ttf'),
        'Sansita Light': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Light.ttf'),
        'Sansita Medium': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Medium.ttf'),
        'Sansita SemiBold': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-SemiBold.ttf'),
        'Sansita': require('../../../assets/fonts/Sansita_Swashed/static/SansitaSwashed-Regular.ttf')
    });

    const profilePic = "../../../assets/accounts/Guest_id/Sample profile pic.png"
    const handleLogout = async () => {
        await AsyncStorage.removeItem('@auth');
        setState({ user: null, token: "" });
        navigation.navigate("Login");
    };

    if (loading || !fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#38D9A9" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.user}>Hello dear, {userName}</Text>

            <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                <Image source={require("../../../assets/out.png")} style={styles.lout} />
            </TouchableOpacity>

            <View style={styles.searchbar}>
                <Text style={{ color: 'white', marginTop: 'auto', marginBottom: 'auto', marginLeft: 15, fontSize: 17, opacity: 0.6 }}>Search...</Text>
                
                <TouchableOpacity style={styles.searchBtn}>
                    <Image source={require("../../../assets/search.png")} style={styles.search} />
                </TouchableOpacity>
            </View>

            <View style={styles.graph1}> 
                <Calendar />
            </View>

            <View style={styles.graph2}>
                <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('Print')}}>
                    <Image source={require('../../../assets/printer.png')} style={styles.prt} />
                    <Text style={styles.prtt}>Print</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('Alumni')}}>
                    <Image source={require('../../../assets/book.png')} style={styles.prt} />
                    <Text style={styles.prtt}>Notable Alumni</Text>

                </TouchableOpacity>
            </View>
            
            <View style={styles.graph3}>
                <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('Placement')}}>
                    <Image source={require('../../../assets/hiring.png')} style={styles.prt} />
                    <Text style={styles.prtt}>Placement</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('downloads')}}>
                    <Image source={require('../../../assets/download.png')} style={styles.prt} />
                    <Text style={styles.prtt}>Downloads</Text>

                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A212E",
        padding: 15,
    },
    user : {
        fontSize: 17,
        top: 50,
        left: 20,
        color: 'white',
        fontFamily: 'Sansita',
        letterSpacing: 1
    },

    logout: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 30,
        position: 'absolute',
        height: 30,
        top: 60,
        right: 20
    },
    lout : {
        width: 28,
        height: 28,
        margin: 'auto'
    },
    
    searchBtn: {
        position: 'absolute',
        color: 'white',
        top: 7.5, 
        bottom: 'auto', 
        right: 10, 
        fontSize: 17, 
    },
    search : {
        width: 25,
        height: 25
    },
    campus_pic : {
        position: 'absolute',
        top: 0
    },
    camp: {
        width: windowWidth * 1,
        height: windowHeight * 0.3
    },
    searchbar : {
        width: windowWidth * 0.9,
        height: windowHeight * 0.05,
        backgroundColor: 'black',
        position: 'relative',
        borderRadius: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 75
    },
    graph1 : {
        backgroundColor: '#313F5C',
        width: windowWidth * 0.9,
        height: windowHeight * 0.4,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'skyblue',
        position: 'relative',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    graph2: {
        // backgroundColor: '#313F5C',
        width: windowWidth * 0.9,
        height: windowHeight * 0.25,
        position: 'relative',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        flex: 1,
        flexDirection: 'row',
    },
    
    graph3: {
        // backgroundColor: '#313F5C',
        width: windowWidth * 0.9,
        height: windowHeight * 0.15,
        position: 'relative',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        width: '40%',
        height: '100%',
        borderWidth: 2,
        borderColor: 'skyblue',
        borderRadius: 15,
        backgroundColor: '#313F5C',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    prt : {
        width: '30%',
        height: '45%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 10
    },
    prtt : {
        fontSize: 16,
        color: 'white',
        margin: 'auto'
    }
});

export default Home;