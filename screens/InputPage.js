import React, {useReducer } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import Counter from '../components/Counter';

export default function InputPage({ navigation, route}) {

  const onAddClient = route.params.onAddClient
  
  const initialValue = {
    id: '',
    name: '',
    surname: '',
    age: '',
    fullname: '',
    position: 'директор',
    pantomic: 'Иванов',
    telephone: '+7-934-239-94-01',
    cardNumber: '193991',
    clientlocked: 'Нет',
    numberCoupons: 7,
    onHands: 2,
    
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'name':
        return {...state, name: action.payload, fullname: `${action.payload} ${state.surname}`, id: `${action.payload}` };
      case 'surname':
        return {...state, surname: action.payload, fullname: `${state.name} ${action.payload}` };
      case 'age':
        return { ...state, age: action.payload };
      default:
        throw new Error('Unknown action type');
    }
  };


    const [state, dispatch] = useReducer(reducer, initialValue);
// 
  // 
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Введите имя</Text> 
        <TextInput style={styles.input}
                   placeholder="Например Роман"
                   value={state.name} 
                   onChangeText={(text) =>
                   dispatch({ type: 'name', payload: text })
                  }  />
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Введите Фамилию</Text> 
        <TextInput style={styles.input}
                   placeholder="Например Васильев"
                   value={state.surname} 
                   onChangeText={(text) =>
                   dispatch({ type: 'surname', payload: text })
                  }  />
      </View>


      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Введите Возраст</Text> 
        <TextInput style={styles.input}
                   placeholder="Просто цифрами"
                   value={state.age} 
                   onChangeText={(text) =>
                   dispatch({ type: 'age', payload: text })
                  }  />
      </View>  

      <Button title="Внести в базу" onPress={() => { 
        onAddClient (state);
        navigation.goBack();
      }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  viewInput: {
    width: '50%',

  },
  textInput: {
    marginTop: 10,
    // textAlign: 'center',

  },
  input: {
    marginTop: 5,
    height: 43,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    paddingLeft: 15,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
  inputDown: {
    marginBottom: 20,
  },
});
