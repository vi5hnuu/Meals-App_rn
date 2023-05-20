import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from '../components/MealItem'

export default function MealsList({ meals }) {
  return <View style={styles.mealsContainer}>
    <FlatList
      data={meals}
      keyExtractor={(mealItem) => mealItem.id}
      renderItem={(mealWrapper) => {
        return <MealItem meal={mealWrapper.item} />
      }} />
  </View>
}


const styles = StyleSheet.create({
  mealsContainer: {
    margin: 5,
  }
})