import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Block({ title, input, style, blockColor}) {
  return (
    <View style={[styles.blockView, style, {backgroundColor: blockColor}]}>
      <Text style={[styles.blockTextTop, style]}>{title}</Text>
      <Text style={[styles.blockTextDown, style]}>{input}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blockView: {
    marginBottom: 4,
    paddingTop: 8,
    paddingLeft: 17,
    height: 50,
  },
  blockTextTop: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  blockTextDown: {
    paddingTop: 4,
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.87)',
  },
});
