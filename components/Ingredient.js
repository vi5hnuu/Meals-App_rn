import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Ingredient({ ingredient }) {
  return <View style={styles.listItem}>
    <Entypo name="check" size={24} color="black" />
    <Text key={ingredient}>{ingredient}</Text>
  </View>
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
})