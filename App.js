import 'react-native-gesture-handler';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';

const Stack = createNativeStackNavigator()
const drawer = createDrawerNavigator()

function DrawerNavigator() {
  return <drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#0077B6' },
    sceneContainerStyle: { backgroundColor: '#CAF0F8' },
    drawerContentStyle: { backgroundColor: '#CAF0F8' },
  }}>
    <drawer.Screen
      name='Categories'
      component={CategoryScreen}
      options={{
        drawerIcon: ({ color, size }) => {
          return <MaterialIcons name="category" size={size} color={color} />
        }
      }} />
    <drawer.Screen
      name='Favourites'
      component={FavouriteScreen}
      options={{
        drawerIcon: ({ color, size }) => {
          return <Fontisto name="favorite" size={size} color={color} />
        }
      }} />
  </drawer.Navigator>
}
export default function App() {
  return <NavigationContainer style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0077B6' },
          contentStyle: {
            backgroundColor: '#CAF0F8',
          }
        }}>
        <Stack.Screen
          name='MealsCategories'
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name='MealsOverview'
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name='MealDetail'
          component={MealDetailScreen}
          options={{ title: 'About the meal' }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>

}

const styles = StyleSheet.create({
});
