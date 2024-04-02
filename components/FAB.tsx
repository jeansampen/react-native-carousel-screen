import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const FAB = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.activeButtonContainer}>
          <Image
            source={require("../assets/images/Home.png")}
            style={{ height: 18, width: 18 }}
          ></Image>
        </View>
        <View style={styles.passiveButtonContainer}>
          <Image
            source={require("../assets/images/Magic.png")}
            style={{ height: 28, width: 28 }}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default FAB;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 26,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  content: {
    backgroundColor: "#1D1C19",
    borderRadius: 60,
    flexDirection: "row",
    padding: 6,
  },
  activeButtonContainer: {
    backgroundColor: "#31312B",
    height: 40,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  passiveButtonContainer: {
    height: 40,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
