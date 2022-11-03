import React from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

interface Props {
  image: any;
  title: string;
  clicked: () => void;
}

export const NutritionPlanThumbnail: React.FC<Props> = ({
  image,
  title,
  clicked,
}) => {
  return (
    <Pressable onPress={() => clicked()} style={styles.container}>
      <ImageBackground
        imageStyle={{ borderRadius: 20 }}
        style={styles.image}
        source={{ uri: image }}
      >
        <View style={styles.shadow}></View>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 20,
  },
  image: {
    height: 170,
    width: "100%",
    justifyContent: "flex-end",
    borderRadius: 20,
    //padding: 10,
  },
  shadow: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.2,
    borderRadius: 20,
  },
  title: {
    margin: 10,
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    color: "white",
  },
});
