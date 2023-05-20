import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from './../data/dymmy_data'
import MealItem from '../components/MealItem'
import { useEffect, useLayoutEffect } from 'react'
import MealsList from '../components/MealsList'

export default function MealsOverviewScreen({ route, navigation }) {
  const cId = route.params.categoryId
  const meals = MEALS.filter(meal => {
    return meal.categoryIds.includes(cId)
  })

  useLayoutEffect(() => {//concurrently while rendering the component
    const categoryTitle = CATEGORIES.find((category) => category.id == cId).title
    navigation.setOptions({
      title: categoryTitle
    })
  }, [cId, navigation])

  return <MealsList meals={meals} />
}
