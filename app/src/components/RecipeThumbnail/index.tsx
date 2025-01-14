import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  title: string;
  time: string;
  carbs?: string;
  img: string;
  pressed: () => void;
  showDel?: boolean;
  removeRecipe?: () => void;
}

export const RecipeThumbnail: React.FC<Props> = ({
  img,
  title,
  time,
  carbs,
  pressed,
  showDel,
  removeRecipe,
}) => {
  console.log("Image : ", img);
  return (
    <Pressable onPress={() => pressed()}>
      <ImageBackground
        source={{
          uri: img,
        }}
        imageStyle={{ borderRadius: 13 }}
        style={styles.container}
      >
        <View style={styles.shadow} />
        {showDel && (
          <Ionicons
            size={25}
            style={styles.removeIcon}
            name={"remove-circle-outline"}
            onPress={() => removeRecipe()}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        {time ? (
          <Text style={styles.time}>about {time}min to make.</Text>
        ) : null}
        {carbs && carbs !== "-1" && (
          <Text style={styles.carbs}>{carbs}g of carbs</Text>
        )}
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: "100%",
    marginBottom: 15,
  },
  shadow: {
    height: 175,
    fontSize: 22,
    backgroundColor: "black",
    borderRadius: 13,
    opacity: 0.4,
  },
  title: {
    position: "absolute",
    bottom: 10,
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    left: 10,
    width: "90%",
    fontFamily: "AvNextBold",
  },
  time: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    left: 10,
    fontFamily: "AvNextBold",
  },
  carbs: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    right: 10,
  },
  removeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "white",
  },
});
