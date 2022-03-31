import { View, Text, Modal, TextInput, Alert } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS } from "../../config";
import CustomButton from "../CustomButton";

export default function SignUp({ setShowSignUp, showSignUp }) {
  const close = () => {
    setShowSignUp(false);
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Modal animationType="slide" transparent={true} visible={showSignUp}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: SIZES.base,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            padding: SIZES.padding,
            width: SIZES.width * 0.9,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              marginBottom: SIZES.padding,
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
          <View>
            <Text style={{ ...FONTS.h3 }}>Username</Text>
            <TextInput
              style={{
                height: 40,
                marginTop: SIZES.base,
                borderWidth: 1,
                borderRadius: SIZES.radius,
                padding: 10,
              }}
              onChangeText={setUsername}
              value={username}
              placeholder="eg: johndoe"
            />
          </View>
          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ ...FONTS.h3 }}>Password</Text>
            <TextInput
              style={{
                height: 40,
                marginTop: SIZES.base,
                borderWidth: 1,
                borderRadius: SIZES.radius,
                padding: 10,
              }}
              onChangeText={setPassword}
              value={password}
              placeholder="eg: somesecurepassword"
              secureTextEntry={true}
            />
          </View>

          <CustomButton
            onPress={close}
            buttonContainerStyle={{
              marginTop: SIZES.base,
              borderRadius: SIZES.radius,
              paddingVertical: SIZES.radius,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            text="Sign Up"
          />
        </View>
      </View>
    </Modal>
  );
}
