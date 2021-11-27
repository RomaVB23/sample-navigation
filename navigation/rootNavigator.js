import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector} from 'react-redux'

// Blocks
import Clients from '../screens/Clients';
import ClientPage from '../screens/ClientPage';
import InputPage from '../screens/InputPage';
import InputPage_useState from '../screens/InputPage_useState';
import Registration from '../screens/Registration'
// 

const Stack = createStackNavigator();

export default function RootNavigator () {
    const profileID = useSelector(state => state.profile.signedUp)   
    return (
      <Stack.Navigator>
        {!profileID && (
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: 'Регистрация',
            headerStyle: {
              height: 80,
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 18,
              fontWeight: '500',
            },
            headerBackTitleVisible: false,
          }}
        />)}
        <Stack.Screen
          name="Клиенты"
          component={Clients}
          options={{
            title: 'Клиенты',
            headerStyle: {
              backgroundColor: '#E02329',
              borderTopColor: '#b11f27',
              borderTopWidth: 35,
              height: 80,
              // padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: '500',
            },
          }}
        />
        <Stack.Screen
          style={{ backgroundColor: '#b11f27' }}
          name="ClientPage"
          component={ClientPage}
          options={{
            title: 'О клиенте',
            headerStyle: {
              backgroundColor: '#E02329',
              borderTopColor: '#b11f27',
              borderTopWidth: 35,
              height: 80,
              // padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: '500',
            },
          }}
        />
        <Stack.Screen
          name="InputPage"
          component={InputPage}
          options={{
            title: 'Добавить Клиента',
            headerStyle: {
              backgroundColor: '#E02329',
              borderTopColor: '#b11f27',
              borderTopWidth: 35,
              height: 80,
              // padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: '500',
            },
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="InputPage_useState"
          component={InputPage_useState}
          options={{
            title: 'Добавить Клиента',
            headerStyle: {
              backgroundColor: '#E02329',
              borderTopColor: '#b11f27',
              borderTopWidth: 35,
              height: 80,
              // padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: '500',
            },
            headerBackTitleVisible: false,
          }}
        />
     
      </Stack.Navigator>
    )}