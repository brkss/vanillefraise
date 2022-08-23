import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";

interface Props {
  image: any;
  title: string;
  clicked: () => void;
}

export const NutritionPlanThumbnail: React.FC<Props> = ({
  title,
  image,
  clicked,
}) => {
  return (
    <Pressable
      onPress={clicked}
      style={styles.container}
    >
      <ImageBackground style={styles.imgBackground} source={image}>
        <View style={styles.shadow} />
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    marginBottom: 5,
  },
  imgBackground: {
    height: 250,
  },
  shadow: {
    backgroundColor: "black",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    opacity: 0.3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    position: "absolute",
    bottom: 20,
    left: 10,
  },
});
