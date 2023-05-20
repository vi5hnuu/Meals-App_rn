import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Step({ step }) {
  return <View key={step} style={styles.listItem}>
    <MaterialCommunityIcons name="subdirectory-arrow-right" size={24} color="black" />
    <Text key={step}>{step}</Text>
  </View>
}


const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
})