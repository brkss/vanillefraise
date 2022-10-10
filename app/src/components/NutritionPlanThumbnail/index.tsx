import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

interface Props {
  image: any,
  title: string;
}

export const NutritionPlanThumbnail: React.FC<Props> = ({image, title}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={image}
      >
        <View style={styles.shadow}></View>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ///
  },
  image: {
    height: 170,
    width: "100%",
    justifyContent: "flex-end",
    //padding: 10,
  },
  shadow: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.2,
  },
  title: {
    margin: 10,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    color: "white",
  },
});
