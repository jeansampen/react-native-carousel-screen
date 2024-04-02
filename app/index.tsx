import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import FAB from "@/components/FAB";
import BackgroundGradient from "@/components/BackgroundGradient";

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Background Texture.png")}
        style={styles.container}
      >
        <BackgroundGradient />
        <Header />

        <Carousel />
      </ImageBackground>
      <FAB />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
