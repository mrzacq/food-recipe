import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../config";

export default function Viewers({ viewers }) {
  if (viewers?.length === 0) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          Be the first one
        </Text>
      </View>
    );
  } else if (viewers?.length <= 4) {
    return (
      <View>
        {/* profile */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 10,
          }}
        >
          {viewers.map((el, i) => (
            <View
              key={i}
              style={{ height: 50, width: 50, marginLeft: i === 0 ? 0 : -20 }}
            >
              <Image
                source={el?.profilePic}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              ></Image>
            </View>
          ))}
        </View>

        {/* text */}
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          {viewers.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          Already try this
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: 10,
          }}
        >
          {viewers?.map((el, i) => {
            if (i <= 2) {
              return (
                <View
                  key={i}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: i === 0 ? 0 : -20,
                  }}
                >
                  <Image
                    source={el?.profilePic}
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                  ></Image>
                </View>
              );
            } else if (i === 3) {
              return (
                <View
                  key={i}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: -20,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: COLORS.darkGreen,
                  }}
                >
                  <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                    {viewers.length - 3}
                  </Text>
                </View>
              );
            }
          })}
        </View>

        {/* text */}
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          {viewers?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: "right",
            ...FONTS.body4,
            lineHeight: 18,
          }}
        >
          Already try this
        </Text>
      </View>
    );
  }
}
