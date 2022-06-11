import React from "react";
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  Loading,
  CaloriesIntake,
  WeightTrack,
  TrackMacronutrients,
  DietOverviewTopBar,
  ActiveFoodFilters,
} from "../../components";
import { useGetDietConfigQuery } from "../../generated/graphql";

export const DietOverview: React.FC<any> = ({ navigation }) => {
  const { loading, error, data } = useGetDietConfigQuery();

  if (loading || error) {
    return <Loading />;
  }

  if (data.getDietConfig.status === false) {
    navigation.push("DietConfiguration");
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <DietOverviewTopBar navigation={navigation} />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <ActiveFoodFilters />
          <CaloriesIntake />
          <WeightTrack />
          <TrackMacronutrients />
          <View style={{ height: 100 }} />
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    marginBottom: 10,
  },
});
