import { TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../config";

export default function CategoryCard({ containerStyle, item, onPress }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray2,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* image */}
      <Image
        source={item.image}
        resizeMode="cover"
        style={{
          width: 100,
          height: 100,
          borderRadius: SIZES.radius,
        }}
      />

      {/* detail */}
      <View
        style={{
          width: "65%",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h2 }}>{item.name}</Text>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
          {item.duration} | {item.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
}
