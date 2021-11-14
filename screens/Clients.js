import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
  TextInput
} from 'react-native';
import ClientName from '../components/ClientName';
// 
import DropDownPicker from 'react-native-dropdown-picker';


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
      position: 'дворник'
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
      position: 'бухгалтер'
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
      position: 'дворник'
    },
  ];
  //
  // хуки добавления клиента
  const [clients, setClients] = useState(oldClients);
  const [filterClients, setFilterClients] = useState(oldClients);
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
  // 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Дворник', value: 'дворник'},
    {label: 'Бухгалтер', value: 'бухгалтер'},
    {label: 'Директор', value:'директор'},
  ]);

  useEffect(() => {
    console.log('new selected value', value);
    const newFilterClients = clients.filter(client => client.position === value);
    console.log('filterClients', newFilterClients);
    setFilterClients(newFilterClients)
  }, [value, clients])


  // В Экспо 
  // const array = [1, 2, 3, 4, 5];
  // for (let index = 0; index < array.length; index++) {
  //   console.log('index', index);
  //   const element = array[index];
  //   console.log('element', element);  
  // }

  return (
    <SafeAreaView style={styles.page}>
      
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />


      <TextInput style={styles.input} onChangeText={setNameClient} value={nameClient} placeholder="Введите Имя" />
      <TextInput style={styles.input} onChangeText={setSurnameClient} value={surmameClient} placeholder="Введите Фамилию"/>
      <Button title="Внести в базу" onPress={() => addClient()}></Button>

      <View style={styles.viewLine}></View>
        <Button title="Внести данные клиента в отдельном окне" onPress={() => { return navigation.navigate('InputPage', {onAddClient})}}></Button>
      <View style={styles.viewLine}></View>

      <FlatList data={filterClients} renderItem={baseClients} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    height: 43,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C4C4C4',
    paddingLeft: 15,
    fontWeight: '400',
    fontSize: 16,
    width: '70%',
  },
  viewLine: {
    height: 2,
    backgroundColor: 'red',
    width: '100%',
    marginVertical: 20,
  },
}
);
