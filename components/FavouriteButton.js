import { View, Text, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export default function FavouriteButton({ isFav, onPress }) {
  const [pressed, setPressed] = useState(isFav)

  function togglePressHandler() {
    setPressed((pressed) => !pressed);
    onPress()
  }
  return <Pressable
    onPress={togglePressHandler}>
    {pressed ?
      <AntDesign name="heart" size={24} color="#f00" /> :
      <AntDesign name="hearto" size={24} color="#023e8a" />}
  </Pressable>
}