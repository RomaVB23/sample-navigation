import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import Block from './Block';

export default function AddNewClient({ navigation}) {
  // const client = route.params.client
  // const { client } = route.params;
  // const {
  //   name,
  //   surname,
  //   pantomic,
  //   age,
  // } = client;

  const AddNewClient = () => {
  const [nameC, setNameC] = useState();
  const [surmameC, setSurnameC] = useState ();
  const [ageClient, setAgeClient] = useState ();

  return (
    <SafeAreaView style={styles.page}>
      <TextInput style={styles.input} onChangeText={setNameC} value={nameC} placeholder="Введите Имя" />
      <TextInput style={styles.input} onChangeText={setSurnameC} value={surmameC} placeholder="Введите Фамилию"/>
      <TextInput style={styles.input} onChangeText={setAgeClient} value={ageClient} placeholder="Введите Возраст" />
      
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  input: {
    marginVertical: 20,
    height: 43,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    paddingLeft: 15,
    fontWeight: 400,
    fontSize: 16,
  },
  we: {
    width: 30,
    height: 50, 
    backgroundColor: 'blue',
  }
});
