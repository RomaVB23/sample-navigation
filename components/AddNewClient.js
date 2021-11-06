import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import Block from './Block';

export default function Ivan({ navigation, route }) {
  // const client = route.params.client
  const { client } = route.params;
  const {
    name,
    surname,
    pantomic,
    age,
  } = client;

  return (
    <SafeAreaView style={styles.page}>
     <TextInput style={styles.input} onChangeText={setText} value={text} />
     <TextInput style={styles.input} onChangeText={setText} value={text} />
     <TextInput style={styles.input} onChangeText={setText} value={text} />

    </SafeAreaView>
  );
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
});
