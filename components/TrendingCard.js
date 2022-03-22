import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES } from "../config";

export default function TrendingCard({ containerStyle, item, onPress }) {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={item.image}
        resizeMode="cover"
        style={{ width: 250, height: 350, borderRadius: SIZES.radius }}
      />
    </TouchableOpacity>
  );
}
