import { Form } from 'native-base';
import React, { Component } from 'react'
import { View ,Text,FlatList,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native'
import {Header,Left,Right} from 'native-base'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Modal from 'react-native-modal';

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
      title: 'All Order',
    },
    {
      id: '2',
      title: 'Pending Order',
    },
    {
      id: '3',
      title: 'On Going Order',
    },
    {
      id: '4',
      title: 'Done',
    },
  ];

 

class Orders extends Component{
  constructor(props){
    super(props)
    this.state={
      isOpen:false,
      isSelect:false,
      tmpArr:[],
      isNotification:false
    }
  }
  renderType=({item,index})=>(
  <TouchableOpacity onPress={()=>this.setState({tmpArr:OrderType[index]})}>
      <View style={{paddingHorizontal:'5%',paddingVertical:'2%'}}>
      <Text style={{fontSize:14,fontFamily:'Poppins-Medium',color:this.state.tmpArr?.id == item.id ? '#BE1F24' :'#707070'}}>{item.title}</Text>
    </View>
  </TouchableOpacity>
  )
    renderItem = ({ item }) => (
      <View style={{width:'95%',backgroundColor:'#fff',marginTop:10,height:200,alignSelf:'center',elevation:2,borderRadius:20,marginBottom:'1%'}}>
      <View style={{flex:1,justifyContent:'space-around',alignItems:'center',flexDirection:'row'}} >
        <Text style={{width:'60%',fontFamily:'Poppins-SemiBold',fontSize:14}}>Order 3456CD-83904</Text>
        <Text style={{width:'30%',fontSize:13,fontFamily:'Poppins-BoldItalic',color:'#FF5E5F'}}>2 min ago</Text>
      </View>
      <View style={{flex:1,flexDirection:'row'}} >
        <View style={{height:'100%',width:'50%',paddingLeft:'3%'}}>
          <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:13,color:'#002637'}}>Customer</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:12,fontFamily:'Poppins-Italic',color:'#707070'}}>Hello</Text>
            <Text style={{fontSize:12,fontFamily:'Poppins-Italic',color:'#707070',paddingLeft:5}}>| 4.6</Text>
          </View>
        </View>
        <View style={{height:'100%',width:'50%'}}>
          <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:13,color:'#002637'}}>Phone</Text>
         <Text style={{fontSize:12,fontFamily:'Poppins-Italic',color:'#707070'}}>+91 9793081102</Text>
        </View>
      </View>
      <View style={{flex:1,flexDirection:'row',paddingLeft:'3%'}} >
      <View style={{height:'100%',width:'50%'}}>
          <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:13,color:'#002637'}}>Status</Text>
          <View style={{alignItems:'center',width:'60%',height:'80%',backgroundColor:'#F7D100',flexDirection:'row',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:12,color:'#fff'}}>OnGoing</Text>
          <Icon name="chevron-down" size={12} color="#eee"/>
          </View>
        </View>
        <View style={{height:'100%',width:'50%'}}>
          <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:13,color:'#002637'}}>Order</Text>
          <View style={{alignItems:'center',width:'60%',height:'80%',backgroundColor:'#AAB7BF',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:12,color:'#fff'}}>View Order</Text>
          </View>
        </View>
      </View>
      <View style={{flex:1,alignItems:'flex-end'}} >
      <View style={{height:'100%',width:'50%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:13}}>Total </Text>
        <Text style={{fontFamily:'Poppins-BoldItalic',fontSize:13,color:'#FF5E5F'}}> 24.000 LBP</Text>
        
      </View>
      </View>
      
    </View>
      );

      listHeader=()=>{
        return(
          <View style={{width:'95%',height:40,alignSelf:'center',justifyContent:'center',paddingTop:'3%'}}>
            <Text style={{color:'#FF5E5F',fontSize:15,fontFamily:'Poppins-SemiBold'}}>SEPTEMBER 30TH 2020</Text>
          </View>
        )
      }
    render(){
        return(
           <SafeAreaView style={{flex:1}}>
             <Header style={{backgroundColor:'transparent',elevation:0,}}>
               <Left>
                 <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                 <View style={styles.cicle}>
                 <Icon name="align-left" size={24} color="#333"/>
                 </View>
                 </TouchableOpacity>
               </Left>
               <View style={{width:'60%',justifyContent:'center',alignItems:'center'}}>
                 <Text style={{fontSize:13,fontFamily:'Poppins-Light',color:'#FF5E5F'}}>Order Type</Text>
                 <TouchableOpacity onPress={()=>this.setState({isSelect:true})}>
                 <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                   <Text style={{fontFamily:'Poppins-Medium',fontSize:15,color:'#002637',paddingRight:'2%'}}>All Orders</Text>
                   <Icon name="chevron-down" size={12} color="#333"/>
                 </View>
                 </TouchableOpacity>
               </View>
               <Right>
               <TouchableOpacity onPress={()=>this.setState({isNotification:true})}>
               <View style={styles.cicle}>
               <Icon name="bell" size={24} color="#333"/>
               </View>
               </TouchableOpacity>
               </Right>
             </Header>
              <FlatList
              ListHeaderComponent={this.listHeader}
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
          <Modal isVisible={this.state.isSelect}
                    backdropColor='#fff'
                    backdropOpacity={0.3}
                    // coverScreen={false}
                    style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isSelect: false })}
                    useNativeDriver={true}
                >
                   <View style={{ width: '112%', height: '40%', backgroundColor: '#fff', marginLeft: '-6%', marginBottom: '-8%', borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
           <Text style={{paddingLeft:'5%',fontFamily:'Poppins-SemiBold',fontSize:15,paddingVertical:'2%'}}>Order Type</Text>
            <FlatList   
            data={OrderType}
            renderItem={this.renderType}
            keyExtractor={item => item.id}
          />
          </View>
                </Modal>
          <Modal isVisible={this.state.isNotification}
                    backdropColor='#fff'
                    backdropOpacity={0.3}
                    // coverScreen={false}
                    style={{ justifyContent: 'flex-end' }}
                    swipeDirection={['up', 'down']}
                    onBackButtonPress={() => this.setState({ isSelect: false })}
                    useNativeDriver={true}
                >
                   <View style={{ width: '112%', height: '60%', backgroundColor: '#dcd', marginLeft: '-6%', marginBottom: '-8%', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
           <Text style={{paddingLeft:'5%',fontFamily:'Poppins-SemiBold',fontSize:15,paddingVertical:'2%'}}>Order Type</Text>
           
          </View>
                </Modal>
           </SafeAreaView>
        )
    }
}

export default Orders

const styles = StyleSheet.create({
  cicle:{
    width:40,
    height:40,
    borderRadius:40/2,
    backgroundColor:'#fff',
    elevation:3,
    justifyContent:'center',
    alignItems:'center'
  }
})