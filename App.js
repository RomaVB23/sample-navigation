import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// шрифты
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
// 
// Blocks
import Clients from './screens/Clients';
import ClientPage from './screens/ClientPage';
import InputPage from './screens/InputPage';
import InputPage_useState from './screens/InputPage_useState';
import Registration from './screens/Registration'
// 
// Reduser
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';


const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const Stack = createStackNavigator();

  export default function App({ navigation }) {
    let [fontsLoaded] = useFonts({
      Roboto_100Thin,
      Roboto_100Thin_Italic,
      Roboto_300Light,
      Roboto_300Light_Italic,
      Roboto_400Regular,
      Roboto_400Regular_Italic,
      Roboto_500Medium,
      Roboto_500Medium_Italic,
      Roboto_700Bold,
      Roboto_700Bold_Italic,
      Roboto_900Black,
      Roboto_900Black_Italic,
    });
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
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
            />
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
        </NavigationContainer>
      </Provider>
    );
    }
  }