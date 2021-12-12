import * as React from 'react';
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

// Навигация
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/rootNavigator';

// Reduser
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';

const store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// 

// Persist
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, combineReducers)

// отделным фвйлом, но что-то не работает 
// import configureStore from './utills/configureStore';
{/* <Provider store={configureStore.store}> */}
{/* <PersistGate persistor={configureStore.persistor}> */}

export default function App({ navigation }) {
  let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  let persistor = persistStore(store)

  let [fontsLoaded] = useFonts({
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
    Roboto_100Thin,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
    }
  }
