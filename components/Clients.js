import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput,
} from 'react-native';
import ClientName from './ClientName';


export default function Clients({ navigation }) {
  const baseClients = ({ item }) => {
    let blockcolor = 'red';
    if (item.age > 40) blockcolor = 'pink';
    else if (item.age < 20) blockcolor = 'green';
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Иван', { client: item })}>
        <ClientName text={item.fullname} color={blockcolor} />
      </TouchableOpacity>
    );
  };
  //
  // Список Клиентов
  const oldClients = [
    {
      name: 'Ivan',
      surname: 'Vasilevich',
      fullname: 'Ivan Vasilevich',
      pantomic: 'Grishko',
      telephone: '+7-901-879-21-23',
      cardNumber: 100500,
      clientlocked: 'Нет',
      numberCoupons: 3,
      onHands: 6,
      age: 13,
    },
    {
      name: 'Daria',
      surname: 'Smirnova',
      fullname: 'Daria Smirnova',
      pantomic: 'Hoos',
      telephone: '+7-911-231-34-23',
      cardNumber: 11001,
      clientlocked: 'Да',
      numberCoupons: 12,
      onHands: 1,
      age: 43,
    },
    {
      name: 'Elena',
      surname: 'Victorovna',
      fullname: 'Elena Victorovna',
      pantomic: 'Zinoveva',
      telephone: '+7-934-239-94-01',
      cardNumber: '193991',
      clientlocked: 'Нет',
      numberCoupons: 7,
      onHands: 2,
      age: 20,
    },
  ];
  //
  //
  const [clients, setClients] = useState(oldClients);
  //
  //
  const baseClient = {
    name: [text],
    surname: 'Vasilevich',
    fullname: 'Ivan Vasilevich',
    pantomic: 'Grishko',
    telephone: '+7-901-879-21-23',
    cardNumber: 100500,
    clientlocked: 'Нет',
    numberCoupons: 3,
    onHands: 6,
    age: 13,
  };
  const addClient = () => {
    console.log(clients);
    setClients([...clients, { ...baseClient, fullname: [text] }]);
  };
  //
  //
  const [text, setText] = useState();
  //
  return (
    <SafeAreaView style={styles.page}>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Button style={styles.button} title="Добавит в базу" onPress={() => addClient()}></Button>
      <FlatList data={clients} renderItem={baseClients} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
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
}
);
