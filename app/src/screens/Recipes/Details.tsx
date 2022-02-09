import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export const RecipeDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://images.101cookbooks.com/coleslaw-recipe-h.jpg?w=680&auto=format",
          }}
        ></ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>Lime & Blistered Peanut Coleslaw</Text>
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
});
