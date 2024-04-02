import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";

type Props = {};
const slides = [
  {
    title: "Harvest",
    subtitle: "Bold design meets timeless beauty",
    cta1Text: "Apply to my room",
    cta2Text: "Details",
    showContent: true,
  },
  {
    title: "Stoneworks",
    subtitle: "Bold design meets timeless beauty",
    cta1Text: "Apply to my room",
    cta2Text: "Details",
    showContent: true,
  },
  {
    title: "",
    subtitle: "",
    cta1Text: "",
    cta2Text: "",
    showContent: false,
  },
];
const Carousel = (props: Props) => {
  return (
    <PagerView style={styles.container} initialPage={0}>
      {slides.map((slide, i) => (
        <ImageBackground
          style={styles.page}
          key={i + 1 + ""}
          source={
            i === 0
              ? require("../assets/images/slide1.png")
              : i === 1
              ? require("../assets/images/slide2.png")
              : require("../assets/images/slide3.png")
          }
          resizeMode="cover"
        >
          {slide.showContent ? (
            <View style={styles.pageDarkBackground}>
              <View style={styles.pageContent}>
                <Text style={styles.pageTitle}>{slide.title}</Text>
                <Text style={styles.pageSubtitle}>{slide.subtitle}</Text>
                <View style={styles.ctaContainer}>
                  <Pressable style={styles.primaryCTA}>
                    <Text style={styles.primaryCTAText}>{slide.cta1Text}</Text>
                  </Pressable>
                  <Pressable style={styles.secondaryCTA}>
                    <Text style={styles.secondaryCTAText}>
                      {slide.cta2Text}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ) : null}
        </ImageBackground>
      ))}
    </PagerView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    height: "58%",
    marginTop: 36,
  },
  page: {
    height: "100%",
    justifyContent: "flex-end",
    width: "98%",
  },
  pageContent: {
    padding: 24,
  },
  pageTitle: { color: "#fff", fontSize: 32, letterSpacing: -1 },
  pageSubtitle: { color: "#fff", fontSize: 16, letterSpacing: 1 },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 22,
  },
  primaryCTA: {
    backgroundColor: "#fff",
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 8.5,
  },
  primaryCTAText: { color: "#31312B" },
  secondaryCTA: {
    borderRadius: 40,
    paddingHorizontal: 14,
    paddingVertical: 8.5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.32)",
  },
  secondaryCTAText: { color: "#fff" },
  pageDarkBackground: {
    backgroundColor: "rgba(0,0,0,0.1)",
    flex: 1,
    justifyContent: "flex-end",
  },
});
