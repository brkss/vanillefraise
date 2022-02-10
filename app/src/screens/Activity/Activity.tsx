import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Slider, Heading, ActivityThumbnail } from "../../components";
import { activity_categories } from "../../utils/data";

export const Activity: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Activity"} />
        </View>
        <View style={styles.recipesContainer}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <Slider color={"#D9EFB8"} categories={activity_categories} />
            <ActivityThumbnail />
          </ScrollView>
        </View>
      </SafeAreaView>
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
    //flex: 0.14,
  },
  recipesContainer: {
    //flex: 0.86,
  },
});
