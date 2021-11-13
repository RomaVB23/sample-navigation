import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';


export default function InputPage({ navigation, route}) {

  const onAddClient = route.params.onAddClient
  const [nameC, setNameC] = useState();
  const [surmameC, setSurnameC] = useState ();
  const [ageC, setAgeC] = useState ();

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Введите имя</Text> 
        <TextInput style={styles.input} onChangeText={setNameC} value={nameC} placeholder="Например Роман" />
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Введите Фамилию</Text> 
        <TextInput style={styles.input} onChangeText={setSurnameC} value={surmameC} placeholder="Например Васильев"/>
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.textInput}>Введите Возраст</Text> 
        <TextInput style={[styles.input, styles.inputDown]} onChangeText={setAgeC} value={ageC} placeholder="Просто цифрами" />
      </View>  

      <Button title="Внести в базу" onPress={() => {
        const clientParams =  
          {
          name:nameC,
          surname: surmameC,
          fullname: nameC + " " + surmameC,
          age: ageC,
          position: 'директор'
          }
        onAddClient (clientParams);
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
