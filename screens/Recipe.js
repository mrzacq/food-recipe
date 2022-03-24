import { BlurView } from "@react-native-community/blur";
import React from "react";
import {
  View,
  Text,
  Button,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import { Viewers } from "../components";

import { COLORS, FONTS, ICONS, SIZES } from "../config";

const Recipe = ({ navigation, route }) => {
  const [recipe, setRecipe] = React.useState("");

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT = 350;

  React.useEffect(() => {
    const recipe = route.params.recipe;
    setRecipe(recipe);
  }, [route]);

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          alignItems: "center",
          overflow: "hidden",
          marginTop: -1000,
          paddingTop: 1000,
        }}
      >
        {/* header image */}
        <Animated.Image
          source={recipe.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />

        {/* creator */}
        <Animated.View
          style={{
            position: "absolute",
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <BlurView
            style={{ flex: 1, borderRadius: SIZES.radius }}
            blurType="dark"
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ width: 40, height: 40, marginLeft: 20 }}>
                <Image
                  source={recipe?.author?.profilePic}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                ></Image>
              </View>

              <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
                  Recipe by
                </Text>
                <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
                  {recipe?.author?.name}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: COLORS.lightGreen1,
                }}
                onPress={() => console.log("profile")}
              >
                <Image
                  source={ICONS.rightArrow}
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGreen1,
                  }}
                ></Image>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Animated.View>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1.5, justifyContent: "center" }}>
          <Text style={{ ...FONTS.h2 }}>{recipe?.name}</Text>
          <Text
            style={{ ...FONTS.body4, color: COLORS.lightGray2, marginTop: 5 }}
          >
            {recipe?.duration} | {recipe?.serving} Serving
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <Viewers viewers={recipe?.viewers} />
        </View>
      </View>
    );
  };

  const renderIngredientHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>Ingredient</Text>
        <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
          {recipe?.ingredients?.length} items
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Animated.FlatList
        data={recipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderRecipeCardHeader()}

            {/* render recipe detail */}
            {renderRecipeInfo()}

            {/* ingredients header */}
            {renderIngredientHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}
            >
              <Image source={item?.icon} style={{ height: 40, width: 40 }} />
            </View>

            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{item?.description}</Text>
            </View>

            <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
              <Text style={{ ...FONTS.body3 }}>{item?.quantity}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<View style={{ marginBottom: 100 }}></View>}
      />

      {/* header bar */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}
      >
        {/* screen overlay */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.black,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        ></Animated.View>

        {/* header bar title */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 10,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <Text style={{ color: COLORS.lightGray2, ...FONTS.body4 }}>
            Recipe by
          </Text>
          <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
            {recipe?.author?.name}
          </Text>
        </Animated.View>

        {/* back button */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={ICONS.back}
            style={{ width: 15, height: 15, tintColor: COLORS.lightGray }}
          ></Image>
        </TouchableOpacity>

        {/* bookmark */}
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={recipe.bookmark ? ICONS.bookmarkFilled : ICONS.bookmark}
            style={{ width: 30, height: 30, tintColor: COLORS.darkGreen }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recipe;
