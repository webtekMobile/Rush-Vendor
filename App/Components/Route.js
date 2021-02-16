import React from 'react'
import {Image,LogBox} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, CardStyleInterpolators, TransitionPresets} from '@react-navigation/stack'

import Splash from '../Components/Splash'
import Login from '../Screens/login'
import Forget from '../Screens/forgetPassword'
import New from '../Screens/newPassword'

import Orders from '../Screens/DashBoard'
import Board from '../Screens/Board'
import Products from '../Screens/Product'
import Discount from '../Screens/Discount'
import Stores from '../Screens/stores'
import DrawerScreen from '../Components/customDrawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const primary='#BE1F24'
const secondary = '#333'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation =()=>{
  return(
      <Drawer.Navigator 
      screenOptions={{
        // headerShown: false,
        gestureEnabled:true,
        gestureDirection:'horizontal',
      }}
      drawerType='slide'
      drawerPosition='left'
      drawerContent={props => <DrawerScreen {...props} />}>
        {/* <Drawer.Screen name='Home' component={Home}/> */}
        <Stack.Screen name="MyTabs" component={MyTabs} />
        
    </Drawer.Navigator>
  )
}

 MyTabs=()=> {
  return (
    <Tab.Navigator
    tabBarOptions={
        {
          keyboardHidesTabBar: true,
          // showLabel:false
          activeTintColor:primary,
          inactiveTintColor:secondary,
          style:{
            backgroundColor:'transparent',
            elevation:0,
            borderTopWidth:0
          }
        }
      }
    >
      <Tab.Screen name="Orders" component={Orders} 
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/orders.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Board" component={Board}
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/board.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Products" component={Products} 
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/products.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Discount" component={Discount} 
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/discount.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
      <Tab.Screen name="Stores" component={Stores} 
       options={{
        tabBarIcon:({focused})=>( <Image source={require('../Assets/stores.png')} style={{width:24,height:24,tintColor: focused ? primary : secondary}}/>)
      }}
      />
    </Tab.Navigator>
  );
}

LogBox.ignoreAllLogs();


const Stack = createStackNavigator();


const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  }

  export default function Nav() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator:
              CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
              open: config,
              close: config
            }
          }}
          headerMode='float'
          animation='fade'
        >
      
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="New" component={New} />
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        
          
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }