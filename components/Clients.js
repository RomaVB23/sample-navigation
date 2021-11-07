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
  // хуки добавления клиента
  const [clients, setClients] = useState(oldClients);
  //
  // хуки изменения поля ввода имени клиента
  const [nameClient, setNameClient] = useState();
  const [surmameClient, setSurnameClient] = useState ();
  // 
  // функция добавления клиента
  const addClient = () => {
    const client = {
      name: nameClient,
      surname: surmameClient,
      fullname: nameClient + " " + surmameClient,
      pantomic: '',
      telephone: '',
      cardNumber: 100500,
      clientlocked: 'Нет',
      numberCoupons: 3,
      onHands: 6,
      age: 13,
     }
    setClients([...clients, client]);
  };
  const onAddClient = (client) => {
    setClients([...clients, client])
  }
  //
  return (
    <SafeAreaView style={styles.page}>
      <Button title="Добавить клиента" onPress={() => navigation.navigate('Добавит Клиента', {onAddClient})}></Button>
      <TextInput style={styles.input} onChangeText={setNameClient} value={nameClient} placeholder="Введите Имя" />
      <TextInput style={styles.input} onChangeText={setSurnameClient} value={surmameClient} placeholder="Введите Фамилию"/>
      <Button title="Добавить в базу" onPress={() => addClient()}></Button>
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
