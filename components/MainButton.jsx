import React from "react";
import { GestureResponderEvent, Pressable, Text } from "react-native";

function MainButton({ title, color, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}

export default MainButton;
