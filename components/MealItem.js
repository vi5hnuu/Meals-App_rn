import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import MealInfo from './MealInfo'

export default function MealItem({ meal }) {
  const nav = useNavigation()

  function selectMealItemHandler() {
    nav.navigate('MealDetail', { mealId: meal.id })
  }
  return (
    <View style={styles.item}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: '#CAF0F8' }}
        style={{ width: '100%' }}>
        <View>
          <Text style={styles.title}>{meal.title}</Text>
          <Image
            source={{ uri: meal.imageUrl }}
            style={styles.image} />
        </View>
        <MealInfo
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
      </Pressable>
    </View >
  )
}
const styles = StyleSheet.create({
  item: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 4,
    shadowColor: '#03045E',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: '98%',
    height: 200,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 3,
    resizeMode: 'cover'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
})