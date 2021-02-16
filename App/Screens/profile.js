import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, StyleSheet, BackHandler, ScrollView, LogBox } from 'react-native'
import { Header, Left, Right } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';
// import ImagePicker from "react-native-customized-image-picker";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            driverId: '',
            name: '',
            serviceName: '',
            zone: '',
            live_status: '',
            mobile: '',
            profile_pic: ''

        };
    }



    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {

    }
    render() {
        LogBox.ignoreAllLogs()
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Header style={{ backgroundColor: 'transparent',elevation:0,top:10 }}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <View style={styles.cicle}>
                                <Icon name="align-left" size={24} color="#333" />
                            </View>
                        </TouchableOpacity>
                    </Left>
                    <Text style={{ color: 'white', fontSize: 22, paddingTop: 18, paddingLeft: 40 }}>Profile </Text>
                    <Right>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <View style={styles.cicle}>
                                <Icon name="pencil" size={24} color="#333" />
                            </View>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <ScrollView>


                    <View style={{ justifyContent: 'space-around', paddingLeft: '5%',marginTop:'8%' }}>
                        <View style={{ width: 110, height: 100, backgroundColor: 'red', }}>
                            {/* <Image source={require('../Assets/logo.png')} style={{width:'100%',height:'100%',overflow:'hidden'}}></Image> */}
                        </View>

                    </View>
                    <View style={{ flex: 1 ,top:'5%'}}>
                        <Text style={[styles.headingTxt]}>Full Name :</Text>
                        <View style={styles.box}>
                            <View style={styles.fild}>
                                <Text style={styles.prflTxt}>Alok Singh</Text>
                            </View>
                        </View>
                        <Text style={styles.headingTxt}>Email Address :</Text>
                        <View style={styles.box}>
                            <View style={styles.fild}>
                                <Text style={styles.prflTxt}>pankaj.alok99@gmail.com</Text>
                            </View>
                        </View>
                        <Text style={styles.headingTxt}>phone number :</Text>
                        <View style={styles.box}>
                            <View style={styles.fild}>
                                <Text style={styles.prflTxt}>+91 9793081102</Text>
                            </View>
                        </View>


                    </View>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Profile

export const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    cicle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#fff',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText: {
        fontSize: 16,
        color: '#444',
        textAlign: 'center'
    },
    headingTxt: {
        fontSize: 14,
        color: 'black',
        paddingLeft:'4%',
        fontFamily:'Poppins-SemiBold',
        textTransform:'uppercase'
    },
    prflTxt:{
        fontSize:12,
        fontFamily:'Poppins-Italic',
        color:'#444',
        paddingLeft:'2%',

    },
    box: {
        width: '95%',
        alignSelf: 'center',
        height: height * 0.08,
        justifyContent: 'space-around',
        elevation: 2,
        marginTop: '2%',
        marginBottom: '4%',
        alignSelf: 'center',
        paddingLeft:'1%'
    },
    fild: {
        width: '90%',
        height: '98%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        elevation: 0.5
    }

});