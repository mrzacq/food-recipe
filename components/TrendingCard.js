import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, ICONS, SIZES } from "../config";
import { BlurView } from "@react-native-community/blur";

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

      <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          backgroundColor: COLORS.transparentGray,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          borderRadius: SIZES.radius,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>lorem</Text>
      </View>

      {/* recipe card info */}
      {/* <RecipeCardInfo item={item} /> */}
      <BlurView
        blurType="dark"
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          height: 100,
          paddingVertical: SIZES.radius,
          paddingHorizontal: SIZES.base,
          borderRadius: SIZES.radius,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                width: "70%",
                color: COLORS.white,
                ...FONTS.h3,
                fontSize: 18,
              }}
            >
              {item.name}
            </Text>
            <Image
              source={item.isBookmark ? ICONS.bookmarkFilled : ICONS.bookmark}
              style={{
                width: 20,
                height: 20,
                marginRight: SIZES.base,
                tintColor: COLORS.darkGreen,
              }}
            ></Image>
          </View>

          <Text style={{ color: COLORS.lightGray, ...FONTS.body4 }}>
            {item.duration} | {item.serving} Serving
          </Text>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
}
