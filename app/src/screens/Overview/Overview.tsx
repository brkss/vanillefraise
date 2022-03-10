import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  Loading,
  Heading,
  MoodStats,
  CaloriesOverview,
  NutritionOverview,
} from "../../components";
import { useFonts } from "expo-font";
import dayjs from "dayjs";

export const Overview: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Overview"} />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <CaloriesOverview />
          <View>
            <Text style={styles.subtitle}>About your mood</Text>
            <Text>{dayjs().format("DD/MM/YYYY")} </Text>
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
