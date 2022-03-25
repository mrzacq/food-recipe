import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { CategoryCard, TrendingCard } from "../components";
import {
  COLORS,
  FONTS,
  ICONS,
  IMAGES,
  SIZES,
  trendingRecipes,
} from "../config";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={trendingRecipes}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View>
              {/* header */}
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: SIZES.padding,
                  alignItems: "center",
                  height: 80,
                }}
              >
                {/* hello text */}
                <View style={{ flex: 1 }}>
                  <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
                    Lorem ipsum dolor
                  </Text>
                  <Text
                    style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </Text>
                </View>

                {/* profile icon */}
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert("Profile", "This is your profile description")
                  }
                >
                  <Image
                    source={IMAGES.profile}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                </TouchableOpacity>
              </View>

              {/* search bar */}
              <View
                style={{
                  flexDirection: "row",
                  height: 50,
                  alignItems: "center",
                  marginHorizontal: SIZES.padding,
                  paddingHorizontal: SIZES.radius,
                  backgroundColor: COLORS.lightGray,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={ICONS.search}
                  style={{ width: 20, height: 20, tintColor: COLORS.gray }}
                />
                <TextInput
                  style={{
                    marginLeft: SIZES.radius,
                    ...FONTS.body3,
                    width: "100%",
                    color: COLORS.black,
                  }}
                  placeholder="Search"
                  placeholderTextColor={COLORS.gray}
                />
              </View>

              {/* see recipe */}
              <View
                style={{
                  marginTop: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                  flexDirection: "row",
                  borderRadius: 10,
                  backgroundColor: COLORS.lightGreen,
                }}
              >
                <View
                  style={{
                    width: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={IMAGES.recipe}
                    style={{ width: 80, height: 80 }}
                  />
                </View>
                <View style={{ flex: 1, paddingVertical: SIZES.radius }}>
                  <Text style={{ width: "80%", ...FONTS.body4 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat?
                  </Text>
                  <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress={() =>
                      Alert.alert("See recipes", "New recipes for you")
                    }
                  >
                    <Text
                      style={{
                        color: COLORS.darkGreen,
                        textDecorationLine: "underline",
                        ...FONTS.h4,
                      }}
                    >
                      Lorem, ipsum.
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* trending cards */}
              <View style={{ marginTop: SIZES.padding }}>
                <Text style={{ marginHorizontal: SIZES.padding, ...FONTS.h2 }}>
                  Trending
                </Text>
                <FlatList
                  data={trendingRecipes}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToAlignment="center"
                  keyExtractor={(el) => `${el.id}`}
                  renderItem={({ item, index }) => {
                    return (
                      <TrendingCard
                        item={item}
                        containerStyle={{
                          marginLeft: index === 0 ? SIZES.padding : 0,
                        }}
                        onPress={() =>
                          navigation.navigate("Recipe", { recipe: item })
                        }
                      />
                    );
                  }}
                />
              </View>

              {/* category header */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                  marginHorizontal: SIZES.padding,
                }}
              >
                <Text style={{ flex: 1, ...FONTS.h2 }}>Category</Text>
                <TouchableOpacity>
                  <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                    view all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <CategoryCard
              item={item}
              containerStyle={{ marginHorizontal: SIZES.padding }}
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
            />
          );
        }}
        ListFooterComponent={() => {
          return <View style={{ marginBottom: 100 }}></View>;
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
