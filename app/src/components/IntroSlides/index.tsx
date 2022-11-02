import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { IntroSlideElement } from "./Item";

const { width, height } = Dimensions.get("window");

const _tmp = ["PRIVATE EDITION • PRIVATE EDITION  "];

export const IntroSlides: React.FC = () => {
  return (
    <View style={styles.container}>
      {_tmp.map((t, key) => (
        <IntroSlideElement key={key} text={`${t}`} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    //backgroundColor: "blue",
  },
});
