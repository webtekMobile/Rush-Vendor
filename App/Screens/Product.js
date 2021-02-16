import { Form } from 'native-base';
import React, { Component } from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import { Header, Left, Right, Input, Item } from 'native-base'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const OrderType = [
    {
        id: '1',
        title: 'Available',
    },
    {
        id: '2',
        title: 'Not available',
    },
];



class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            isSelect: false,
            tmpArr: [],
            isNotification: false,
            isLoggedIn: false,
            isAdd:false
        }
    }

    itemSeparator = () => {
        return (
            <View style={{ width: '90%', height: 0.5, backgroundColor: '#4444', alignSelf: 'center' }}></View>
        )
    }

    renderItem = ({ item }) => (
        <View style={{ width: '95%', alignSelf: 'center', flexDirection: 'row', paddingTop: '2%', backgroundColor: '#fff', height: 150, marginTop: 10 }}>
            <View style={{ width: '25%', backgroundColor: '#fff' }}>
                <View style={{ width: '95%', height: '50%', overflow: 'hidden', borderWidth: 0.5 }}>
                    <Image source={require('../Assets/product.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                </View>
            </View>
            <View style={{ width: '70%', backgroundColor: '#fff', paddingLeft: '1%' }}>
                <Text style={{ fontFamily: 'Poppins-BoldItalic', fontSize: 12, color: '#002637' }}>FREEK’ALE</Text>
                <Text style={{ textAlign: 'justify', fontSize: 11, fontFamily: 'Poppins-Italic', color: '#002637', paddingVertical: '1%' }}>Wholesome freekeh with a mix of fresh kale, black
                beans, cherry tomatoes and roasted sweet potatoes.
                Topped with walnuts and white cheese.
Served with our freekin’ good dressing</Text>
                <Text style={{ fontFamily: 'Poppins-Itali', fontSize: 12, color: '#FF5E5F', paddingVertical: '2%' }}>Full Portion : 33.000 LBP</Text>
            </View>
            <View style={{ width: '5%', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => this.setState({ isSelect: true })}>
                    <Icon name='ellipsis-v' size={24} />
                </TouchableOpacity>
            </View>

        </View>
    );

    renderType = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.setState({ tmpArr: OrderType[index] })}>
            <View style={{ paddingHorizontal: '5%', paddingVertical: '2%' }}>
                <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: this.state.tmpArr?.id == item.id ? '#BE1F24' : '#707070' }}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <StatusBar backgroundColor='#F5F5F5' /> */}
                <StatusBar backgroundColor='#FF7B7B' hidden={true} />
                <Header style={{ backgroundColor: 'transparent', elevation: 0, paddingTop: '5%' }}>
                    <Left>
                        <TouchableOpacity onPress={()=>this.setState({isAdd:true})}>
                            <View style={styles.cicle}>
                                <Icon name="align-left" size={24} color="#333" />
                            </View>
                        </TouchableOpacity>
                    </Left>
                    <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 15, color: '#002637', paddingRight: '2%', textTransform: 'uppercase' }}>Products</Text>
                        </View>
                    </View>
                    <Right>
                        <TouchableOpacity onPress={() => this.setState({ isLoggedIn: true })}>
                            <View style={styles.cicle}>
                                <Icon name="bell" size={24} color="#333" />
                            </View>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={{ width: '100%', height: '10%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ width: '40%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold', color: '#002637', textTransform: 'uppercase' }}>General</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold', color: '#999', textTransform: 'uppercase' }}>Add Ons</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Bold', color: '#002637', textTransform: 'uppercase' }}>+Add New</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    style={{ top: 15, backgroundColor: '#fff', paddingTop: '3%', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
                    data={DATA}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}
                    keyExtractor={item => item.id}
                />
                <Modal isVisible={this.state.isSelect}
                    backdropColor='#222'
                    backdropOpacity={0.3}
                    // coverScreen={false}
                    style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isSelect: false })}
                    useNativeDriver={true}
                >
                    <View style={{ width: '112%', height: '40%', backgroundColor: '#fff', marginBottom: '-4%', marginLeft: '-6%' }}>
                        <Text style={{ paddingLeft: '8%', fontFamily: 'Poppins-SemiBold', fontSize: 15, paddingVertical: '5%', textTransform: 'uppercase' }}>Details</Text>
                        <View style={{ paddingLeft: '3%' }}>
                            <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontFamily: 'Poppins-Medium', fontSize: 14, color: '#44A805' }}>Available</Text>
                            <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontFamily: 'Poppins-Medium', fontSize: 14 }}>Not available</Text>
                        </View>
                        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ paddingVertical: 20, paddingHorizontal: 60, backgroundColor: '#002637', color: '#fff', fontSize: 14, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ paddingVertical: 20, paddingHorizontal: 60, backgroundColor: '#002637', color: '#fff', fontSize: 14, fontFamily: 'Poppins-SemiBold', textTransform: 'uppercase' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isLoggedIn}
                    backdropColor='#F5F5F5'
                    backdropOpacity={0.9}
                    // coverScreen={false}
                    // style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isLoggedIn: false })}
                    useNativeDriver={true}
                >
                    <View style={{ width: '100%', height: '40%', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#F5F5F5'}}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, width: '80%', textAlign: 'justify' }}>In order to protect your privacy
                        and maintain a high Security
                        system you are requested to
enter your password</Text>
                        <View style={styles.inptBox}>

                            <Item style={styles.inptItem}>
                                <Input
                                    secureTextEntry={true}
                                    placeholder='Password'
                                    type="text"
                                    // onChangeText={(text) => this.lname(text)}
                                    style={[styles.inptText]} />

                            </Item>
                        </View>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity 
                            >
                                <Text style={styles.btnText}>Login</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                    </View>
                </Modal>
                <Modal isVisible={this.state.isAdd}
                    backdropColor='#F5F5F5'
                    backdropOpacity={0.9}
                    // coverScreen={false}
                    // style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isAdd: false })}
                    useNativeDriver={true}
                >
                    <View style={{ width: '100%', height: '40%', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#F5F5F5'}}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 15, width: '80%', textAlign: 'justify' }}>Write the category you want to
Add to your list</Text>
                        <View style={styles.inptBox}>

                            <Item style={styles.inptItem}>
                                <Input
                                
                                    placeholder='Enter Category Name'
                                    type="text"
                                    // onChangeText={(text) => this.lname(text)}
                                    style={[styles.inptText]} />

                            </Item>
                        </View>
                        <LinearGradient colors={['#BE1F24', '#FF5355', '#FF7B7B']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.btnStyle]}>
                            <TouchableOpacity 
                            >
                                <Text style={styles.btnText}>Add</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                    </View>
                </Modal>

            </SafeAreaView>
        )
    }
}

export default Product

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
    inptBox: {
        width: '95%',
        alignSelf: 'center',
        marginTop: '4%',
        height: '22%',
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
        borderRadius: 5
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
        marginTop: '5%',
        borderRadius:5

    }
})