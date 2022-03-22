import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../config";
import LinearGradient from "react-native-linear-gradient";

export default function CustomButton({
  text,
  buttonContainerStyle,
  colors,
  onPress,
}) {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress} style={buttonContainerStyle}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{ ...buttonContainerStyle }}
        >
          <Text
            style={{ textAlign: "center", color: COLORS.white, ...FONTS.h3 }}
          >
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
        <Text
          style={{ textAlign: "center", color: COLORS.lightGreen, ...FONTS.h3 }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}
