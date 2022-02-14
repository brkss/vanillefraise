import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Slider, Heading, ActivityThumbnail } from "../../components";
import { activity_categories } from "../../utils/data";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Activity: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Activity"} />
        </View>
        <Slider color={"#D9EFB8"} categories={activity_categories} />
        <View style={styles.actions}>
          <Pressable
            onPress={() => navigation.push("NewActivity")}
            style={styles.create}
          >
            <Ionicons name={"ios-add-circle-outline"} size={24} />
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.createTxt}>Create New Activity</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.recipesContainer}>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
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
    //flex: 1,
  },
  actions: {
    marginVertical: 15,
  },
  create: {
    flexDirection: "row",
    flexWrap: "nowrap",
    opacity: 0.7,
  },
  createTxt: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
