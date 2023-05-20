import { FlatList, Text, View, StyleSheet, StatusBar } from 'react-native'
import { CATEGORIES } from './../data/dymmy_data'
import CategoryGridTile from '../components/CategoryGridTile'


export default function CategoryScreen({ navigation }) {

  function categoryPressHandler(categoryId) {
    navigation.navigate('MealsOverview', { categoryId })
  }

  return <View style={styles.screen}>
    <StatusBar backgroundColor='#0077B6' />
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={(categoryWrapper) => {
        return <CategoryGridTile
          title={categoryWrapper.item.title}
          color={categoryWrapper.item.color}
          onPress={categoryPressHandler.bind(null, categoryWrapper.item.id)}
        />
      }}
      numColumns={2} />
  </View>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#CAF0F8',
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
})
