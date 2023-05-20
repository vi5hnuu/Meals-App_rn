import { View, Text, StyleSheet } from 'react-native'
import { favContext } from './../store/context/favContext'
import { MEALS } from '../data/dymmy_data'
import { useContext } from 'react'
import MealsList from '../components/MealsList'

export default function FavouriteScreen() {
  const favctx = useContext(favContext)
  const meals = MEALS.filter(meal => favctx.ids.includes(meal.id))

  if (meals.length == 0) {
    return <View>
      <Text style={styles.text}>You dont have any favourite meal yet.</Text>
    </View>
  }
  return <MealsList meals={meals} />
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    padding: 7,
    fontWeight: '600',
    borderBottomColor: '#0077b6',
    borderBottomWidth: 2,
    marginHorizontal: 10,
    borderRadius: 15
  }
})