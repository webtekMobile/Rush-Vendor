import React, { Component } from 'react'
import { Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { View, Item, Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class NewPassword extends Component {

    

    render() {
        return (
            <ScrollView>
            <SafeAreaView style={{ height: hp('100%'), width: wp('100%')}}>
                <View style={{ flex: 0.7,}}>
                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:'5%'}}>
                    <Image source={require('../Assets/Group_3250.png')} style={{ width: 180, height: 90 }}></Image>
                    </View>
                  
                </View>
                <View style={{ flex: 1, paddingTop: '15%' }}>
                <View style={{  justifyContent: 'flex-end', alignItems: 'center', flex:0.1}}>
                        <Text style={{  fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#FF5E5F', textAlign: 'center' }}>Create A New{'\n'}Password</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.inptBox}>

                            <Item style={styles.inptItem}>
                                <Input
                                    placeholder='Create Password'
                                    type="text"
                                    secureTextEntry={true}
                                    // onChangeText={(text) => this.lname(text)}
                                    style={[styles.inptText]} />

                            </Item>
                        </View>
                        <View style={styles.inptBox}>

                            <Item style={styles.inptItem}>
                                <Input
                                    secureTextEntry={true}
                                    placeholder='Confirm Password'
                                    type="text"
                                    // onChangeText={(text) => this.lname(text)}
                                    style={[styles.inptText]} />

                            </Item>
                        </View>

                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'flex-start', alignItems: 'center' }}>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DrawerNavigation',{screen:'MyTabs'})}
                            >
                                <Text style={styles.btnText}>Save</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </SafeAreaView>
            </ScrollView>
        )
    }
}

export default NewPassword

const styles = StyleSheet.create({
    inptBox: {
        width: '95%',
        alignSelf: 'center',
        marginTop: '4%',
        height: '25%',
        overflow: 'hidden',
    },
    inptText: {
        paddingLeft: 10,
        width: '100%',
        height: '100%',
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
    },
    inptItem: {
        elevation: 0.5,
        backgroundColor: 'white',
        height: '100%',
        borderRadius:5
    },
    btnText: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-Medium',

    },
    btnStyle: {
        width: '70%',
        elevation: 3,
        alignSelf: 'center',

    },
})