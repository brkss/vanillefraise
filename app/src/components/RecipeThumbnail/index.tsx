import React from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
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
    <TouchableOpacity onPress={() => pressed()}>
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
        <Text style={styles.time}>about {time} to make.</Text>
        {carbs && <Text style={styles.carbs}>120g of carbs</Text>}
      </ImageBackground>
    </TouchableOpacity>
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
    width: "100%",
    backgroundColor: "black",
    borderRadius: 13,
    opacity: 0.4,
  },
  title: {
    position: "absolute",
    bottom: 10,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    left: 10,
    width: "90%",
  },
  time: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 10,
    left: 10,
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
