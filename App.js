import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Blocks
import Clients from './components/Clients';
import Ivan from './components/Ivan';
import InputPage from './components/InputPage';

const Stack = createStackNavigator();
export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Клиенты"
          component={Clients}
          options={{
            title: 'Клиенты',
            headerStyle: {
              backgroundColor: '#E02329',
              borderTopColor: '#b11f27',
              borderTopWidth: 24,
              height: 80,
              padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: 500,
            },
          }}
        />
        <Stack.Screen
          style={{ backgroundColor: '#b11f27' }}
          name="Иван"
          component={Ivan}
          options={{
            title: 'О клиенте',
            headerStyle: {
              backgroundColor: '#E02329',
              borderTopColor: '#b11f27',
              borderTopWidth: 24,
              height: 80,
              padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: 500,
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
              borderTopWidth: 24,
              height: 80,
              padding: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Roboto_500Medium',
              fontSize: 20,
              fontWeight: 500,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}