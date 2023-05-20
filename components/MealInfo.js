import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MealInfo({ duration, complexity, affordability }) {
  return <View style={styles.info}>
    <Text style={styles.text}>{duration} min</Text>
    <Text style={styles.text}>{complexity.toUpperCase()}</Text>
    <Text style={styles.text}>{affordability.toUpperCase()}</Text>
  </View>
}

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingVertical: 22
  },
  text: {
    fontWeight: 'bold'
  }
})