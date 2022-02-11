import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Close,
  Ingredients,
  Instructions,
  RecipeMetaData,
  Button,
} from "../../components";

const ings = [
  "nonstick cooking spray",
  "5 (6 ounce) pork chops",
  "1 pinch garlic salt, or to taste",
  "1 (18.5 ounce) can French onion soup (such as Progresso®)",
  "1 (8 ounce) container light sour cream",
  "2 tablespoons all-purpose flour",
];

export const RecipeDetails: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://images.101cookbooks.com/TEMPEH-CRUMBLE-BOWL-H.jpg?w=680&auto=format",
          }}
        >
          <Close pressed={() => navigation.popToTop()} />
        </ImageBackground>
        <View style={styles.content}>
          <RecipeMetaData />
          <Ingredients ingredients={ings} />
          <Instructions />
          <Button
            //color={"#2A2A2A"}
            //bg={"#B6DA81"}
            txt={"Start Cooking"}
            clicked={() => navigation.push("Cooking")}
          />
          <View style={{ height: 50 }} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300,
    width: "100%",
  },
  content: {
    padding: 10,
  },
});
