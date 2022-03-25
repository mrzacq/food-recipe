import { View, Image } from "react-native";
import React from "react";
import { COLORS, os } from "../config";

export default function TabIcon({ focused, icon }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: os === "ios" ? 80 : 60,
        width: 50,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightLime,
        }}
      />

      {focused && (
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: COLORS.darkGreen,
          }}
        ></View>
      )}
    </View>
  );
}
