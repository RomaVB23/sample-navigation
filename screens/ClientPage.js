import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Block from '../components/Block';

export default function ClientPage({ navigation, route }) {
  const { client } = route.params;
  const {
    name,
    surname,
    pantomic,
    telephone,
    cardNumber,
    numberCoupons,
    clientlocked,
    onHands,
  } = client;
  let couponsColor = 'blue';
  let colorLocked = "#52CC52"
  if (client.numberCoupons === 0) couponsColor = 'red';
  else if (client.numberCoupons === 25 || client.numberCoupons === 50)
    couponsColor = 'yellow';
  else if (client.numberCoupons < 4) couponsColor = 'green';
  else if (client.numberCoupons > 10) couponsColor = 'pink';

  if (client.clientlocked === "Нет") colorLocked = "#52CC52"
  else colorLocked = "red"
  return (
    <SafeAreaView style={styles.page}>
      <Block title="Фамилия" input={name} />

      <Block title="Имя" input={surname} />

      <Block title="Отчество" input={pantomic} />

      <Block title="Телефон" input={telephone} />

      <Block
        title="Номер карты"
        input={cardNumber}
        blockColor={client.cardNumber !== 100500 ? '#C400AB' : ''}
      />

      <Block
        title="Клиент заблокирован"
        input={clientlocked}
        style={{ color: '#FFFFFF' }}
        blockColor = {colorLocked}
      />

      <Block
        title="Количество купонов в БД:"
        input={numberCoupons}
        style={{ color: '#FFFFFF' }}
        blockColor={couponsColor}
      />

      <Block title="Выдано на руки" input={onHands} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
