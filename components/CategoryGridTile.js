import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.tile, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        style={
          ({ pressed }) =>
            pressed ? [{ flex: 1 }, styles.pressed] : [{ flex: 1 }]
        } android_ripple={{ color: '#ADE8F4' }}>
        <Text style={styles.categoryText}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    overflow: 'hidden',
    flex: 1,
    height: 150,
    margin: 5,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#03045E',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
  },
  categoryText: {
    flex: 1,
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontSize: 18,
    color: '#33415c',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  pressed: {
    transform: [{ scale: 1.05 }],

  }
})
