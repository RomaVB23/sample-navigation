import React,{useReducer} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity} from "react-native";
import {registration} from '../reducers/profileReducer';
import {useDispatch } from 'react-redux';

const registrationBase = {
  id: '',
  name: '',
  surname: '',
  telephone: '',
  e_mail: '',
  position: 'регистрация',
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return {...state, name: action.payload,  id:`key_000_${action.payload}` };
    case 'surname':
      return {...state, surname: action.payload };
    case 'telephone':
      return { ...state, telephone: action.payload };
    case 'e_mail':
      return { ...state, e_mail: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};



export default function Registration({ navigation}) {

  
    const [state, dispatch] = useReducer(reducer, registrationBase);

    const regDispatch = useDispatch()

    const onRegistration = () => {
      regDispatch(registration(state))
      console.log('registration', state)
      navigation.navigate('Клиенты')
    }
    

  return (
    <SafeAreaView>
      
      <Text style={styles.text}>Номер телефона*</Text>
       <TextInput
        style={styles.input}
        placeholder="+7 (950) 345-56-31"
        keyboardType="phone-pad"
        value={state.regTelephone}
        onChangeText={(text) =>
            dispatch({ type: 'telephone', payload: text })
           } 
        
      />

      <Text style={styles.text}>Имя</Text>
      <TextInput
        style={styles.input}
        placeholder="Роман"
        value={state.regName}
        onChangeText={(text) =>
            dispatch({ type: 'name', payload: text })
           } 
      />


      <Text style={styles.text}>Фамилия</Text>
      <TextInput
        style={styles.input}
        placeholder="Васильев"
        value={state.regSurname}
        onChangeText={(text) =>
            dispatch({ type: 'surname', payload: text })
           } 
      />


      <Text style={styles.text}>E-mail*</Text>
      <TextInput
        style={styles.input} 
        keyboardType="email-address"
        placeholder="test@gmail.com"
        value={state.regE_mail}
        onChangeText={(text) =>
            dispatch({ type: 'e_mail', payload: text })
           } 
      />
      
      <View style={[styles.buttonArea]}>
      <TouchableOpacity style={[styles.button]}
                        onPress={() => onRegistration()
                       } >
          <Text style={styles.buttonText}>регистрация</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  };

const styles = StyleSheet.create({
  

 
  input: {
    marginHorizontal: 15,
    height: 43,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C4C4C4",
    paddingLeft: 15,
    fontFamily:'Roboto_400Regular',
    fontWeight: '400',
    fontSize: 16,
  },
  text: {
    marginTop: 12,
    marginLeft: 15,
    fontFamily:'Roboto_400Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  buttonArea: {
    alignItems: "center",
  },
  button: {
    marginTop: 34,
    width: 320,
    height: 43,
    borderRadius: 5,
    backgroundColor:"#11D6D4",
    alignItems: "center",
  },
  buttonText:{
    padding: 13,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: '700',
    textTransform: "uppercase",
    // fontFamily: "Arial Rounded MT Pro Cyr",
  },
});

