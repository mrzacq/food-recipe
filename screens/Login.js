import React from "react";
import { View, Text, Alert, StatusBar, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, FONTS, IMAGES, SIZES } from "../config";
import { CustomButton } from "../components";

const Login = ({ navigation }) => {
  const pressSignUp = () => {
    Alert.alert("Sign Up Failed", "Please try again");
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <StatusBar barStyle="light-content" />

      {/* header */}
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          source={IMAGES.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                lineHeight: 45,
              }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* detail */}
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text
          style={{
            color: COLORS.gray,
            marginTop: SIZES.radius,
            ...FONTS.body3,
            width: "70%",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Text>

        {/* button */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          {/* login */}
          <CustomButton
            text="Login"
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
            buttonContainerStyle={{ paddingVertical: 18, borderRadius: 20 }}
          />
          {/* sign up */}
          <CustomButton
            text="Sign Up"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={pressSignUp}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
