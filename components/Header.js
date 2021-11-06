import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header({ text }) {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerViewTop} />
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    height: 80,
    backgroundColor: '#E02329',
  },
  headerViewTop: {
    height: 24,
    backgroundColor: '#B11F27',
  },
  headerText: {
    padding: 16,
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    fontWeight: 500,
    color: '#FFFFFF',
  },
});