import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Slider, Heading, ActivityThumbnail } from "../../components";
import { activity_categories } from "../../utils/data";

export const Activity: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading title={"Activity"} />
      </View>
      <View style={styles.recipesContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Slider color={"#C8F6FC"} categories={activity_categories} />
          <ActivityThumbnail />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
  },
  headingContainer: {
    flex: 0.14,
  },
  recipesContainer: {
    flex: 0.86,
  },
});
