import { StyleSheet, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const BackgroundGradient = (props: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "#FAF8F6"]}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      ></LinearGradient>
    </View>
  );
};

export default BackgroundGradient;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
});
