import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  Loading,
  Heading,
  MoodStats,
  CaloriesOverview,
  NutritionOverview,
  MealsOverview
} from "../../components";
import { useFonts } from "expo-font";

export const Overview: React.FC<any> = ({navigation}) => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed ) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Overview"} />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <CaloriesOverview />
          <MealsOverview navigation={navigation} />
          <View>
            <Text style={styles.subtitle}>About your mood</Text>
            <Text> According to your records </Text>
            <View style={{ marginBottom: 30 }}>
              <MoodStats />
            </View>
          </View>
          <NutritionOverview />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
