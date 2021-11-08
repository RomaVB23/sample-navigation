import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ClientName({ text, color }) {
  return (
    <View style={[styles.blockView, {backgroundColor: color}]}>
      <Text style={styles.blockText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blockView: {
    marginTop: 17,
    marginLeft: 17,
    width: 275,
    height: 52,
    backgroundColor: '#C4C4C4',
  },
  blockText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 11,
    paddingLeft: 16,
  },
});
