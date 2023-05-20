import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function MealFeature({ isFreeOf }) {
  return <View style={styles.feature}>
    {isFreeOf ?
      <MaterialIcons name="verified" size={24} color="#2b9348" /> : <Entypo name="cross" size={24} color="#6c757d" />}
    <Text>GlutenFree</Text>
  </View>
}

const styles = StyleSheet.create({
  feature: {
    flexDirection: 'row',
    gap: 7,
    flexBasis: '45%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})