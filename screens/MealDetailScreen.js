import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { MEALS } from '../data/dymmy_data'
import MealInfo from '../components/MealInfo'
import MealFeature from '../components/MealFeature';
import Step from '../components/Step';
import Ingredient from '../components/Ingredient';
import { useContext, useLayoutEffect } from 'react';
import FavouriteButton from '../components/FavouriteButton';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { actions as favActions } from './../store/redux-context/favSlice'

export default function MealDetailScreen({ route, navigation }) {
  const state = useSelector((state) => state.favMealsR)
  const dispatch = useDispatch()
  const mid = route.params.mealId
  const isFav = state.ids.includes(mid)
  const meal = MEALS.find((meal) => meal.id === mid)
  function onToggleFavHandler() {
    isFav ? dispatch(favActions.removeFavorite({ id: mid })) :
      dispatch(favActions.addFavorite({ id: mid }));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <FavouriteButton
          isFav={isFav}
          onPress={onToggleFavHandler} />
      }
    })
  }, [navigation])

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>{meal.title}</Text>
      <Image
        source={{ uri: meal.imageUrl }}
        style={styles.image} />
      <MealInfo
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
      />
      <View style={[styles.container, { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 0, alignItems: 'center', justifyContent: 'center' }]}>
        <MealFeature isFreeOf={meal.isGlutenFree} />
        <MealFeature isFreeOf={meal.isVegan} />
        <MealFeature isFreeOf={meal.isVegetarian} />
        <MealFeature isFreeOf={meal.isLactoseFree} />
      </View>
      <View style={styles.container}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredients}>
          {meal.ingredients.map((ingredient) => {
            return <Ingredient ingredient={ingredient} />
          })}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.stepsTitle}>Steps</Text>
        <View>
          {meal.steps.map((step) => {
            return <Step step={step} />
          })}
        </View>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 7,
    marginBottom: 7
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    padding: 7,
    fontWeight: 600
  },
  image: {
    height: 350,
    resizeMode: 'cover',
    borderRadius: 15
  },
  container: {
    backgroundColor: '#ADE8F4',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    gap: 15,
    marginBottom: 10,
  },
  ingredientsTitle: {
    textAlign: 'center',
    fontSize: 22
  },
  ingredients: {
    gap: 5,
    marginBottom: 10
  },
  stepsTitle: {
    fontSize: 22
  }
})