import React from "react";
import { View, Text, Button } from "react-native";

const Recipe = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Recipe</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Recipe;
