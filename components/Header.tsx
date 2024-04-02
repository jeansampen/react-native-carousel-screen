import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <Image
        style={{
          height: 18,
          width: 18,
          alignSelf: "flex-end",
          marginBottom: 36,
          marginTop: 8,
        }}
        source={require("../assets/images/Menu.png")}
      ></Image>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={require("../assets/images/Blur.png")}
          resizeMode="cover"
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6.86,
            marginRight: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              borderRadius: 6.86,
              padding: 18,
            }}
          >
            <Image
              source={require("../assets/images/Avery.png")}
              style={{ height: 48, width: 48, borderRadius: 6.86 }}
            />
          </View>
        </ImageBackground>
        <View>
          <Text
            style={{
              color: "#848280",
              fontSize: 24,
              letterSpacing: -1,
              lineHeight: 29.76,
            }}
          >
            Georgia
          </Text>
          <Text
            style={{
              color: "#1D1C19",
              fontSize: 24,
              letterSpacing: -1,
              lineHeight: 29.76,
            }}
          >
            Let's start designing
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
