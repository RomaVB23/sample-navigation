import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import ClientName from '../components/ClientName';
// 
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector, useDispatch } from 'react-redux'
import { addClient } from '../reducers/clientsReducer';


export default function Clients({ navigation, route }) {
  const baseClients = ({ item }) => {
    let blockcolor = 'red';
    if (item.age > 40) blockcolor = 'pink';
    else if (item.age < 20) blockcolor = 'green';
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ClientPage', { client: item })}>
        <ClientName text={item.fullname} color={blockcolor} />
      </TouchableOpacity>
    );
  };
  //


  // ReactRedux
  const counter = useSelector((state) => state.clients);
  const profile = useSelector(state => state.profile);
  console.log('kff', counter)
  console.log ('ищу тебя', profile)
  const dispatch = useDispatch()
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
      position: 'дворник',
      id: "old_clients_Ivan"
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
      position: 'бухгалтер',
      id: "old_clients_Daria"
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
      position: 'дворник',
      id: "old_clients_Elena"
    },
  ];
  //
  // хуки добавления клиента
  const [clients, setClients] = useState(oldClients);
  const [filterClients, setFilterClients] = useState(oldClients);
  //

  // 
  // функция добавления клиента
  const onAddClient = (client) => {
    setClients([...clients, client])
    dispatch(addClient(client))
  }
  // 
  //  сортировка клиентов 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Дворник', value: 'дворник'},
    {label: 'Бухгалтер', value: 'бухгалтер'},
    {label: 'Директор', value:'директор'},
    {label: 'Регистрация', value:'регистрация'},
  ]);

  useEffect(() => {
    console.log('new selected value', value);
    const newFilterClients = clients.filter(client => client.position === value);
    console.log('filterClients', newFilterClients);
    setFilterClients(value === undefined || value === null ? clients : newFilterClients)
  }, [value, clients])

  return (
    <SafeAreaView style={styles.page}>

      <View style={styles.viewLine}></View>
        <Text style={styles.textProfile}>Вы авторизовались как {profile.name} {profile.surname}</Text>
      <View style={styles.viewLine}></View>
      
      <View style={styles.viewLine}></View>
        <Button title="Внести данные клиента в отдельном окне useState" onPress={() => { return navigation.navigate('InputPage_useState', {onAddClient})}}></Button>
      <View style={styles.viewLine}></View>

      <View style={styles.viewLineBlue}></View>
        <Button title={`Внести данные клиента в отдельном окне \n useReducer`} onPress={() => { return navigation.navigate('InputPage', {onAddClient})}}></Button>
      <View style={styles.viewLineBlue}></View>

     
      <Button title="Внести в базу" onPress={() => { 
    
        navigation.navigate('Регистрация');
      }}
      />
  

      
      <DropDownPicker style={styles.select}
        open={open}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        value={value}
      />

      <FlatList data={filterClients} 
                renderItem={baseClients}  
                keyExtractor={(myKey) => myKey.id}
                />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
  },
  viewLine: {
    height: 2,
    backgroundColor: 'red',
    width: '100%',
    marginVertical: 10,
  },
  select: {
    backgroundColor: 'silver'
  },
  viewLineBlue: {
    height: 2,
    backgroundColor: 'blue',
    width: '100%',
    marginBottom: 20,
  },
  textProfile: {
    fontSize: 20,
    fontWeight: '600',
  },
}
);
