import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ingredients } from "../../components";

const ings = [
  "nonstick cooking spray",
  "5 (6 ounce) pork chops",
  "1 pinch garlic salt, or to taste",
  "1 (18.5 ounce) can French onion soup (such as Progresso®)",
  "1 (8 ounce) container light sour cream",
  "2 tablespoons all-purpose flour",
];

export const RecipeDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://images.101cookbooks.com/TEMPEH-CRUMBLE-BOWL-H.jpg?w=680&auto=format",
          }}
        ></ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>Spicy Tempeh Crumble Bowl </Text>
          <Text style={styles.description}>
            Simmered with French onion soup in a slow cooker, these seasoned
            pork chops make an easy dinner that's sure to please.
          </Text>
          <Ingredients ingredients={ings} />
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
  },
  description: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: 10,
  },
});
