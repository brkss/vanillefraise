import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import {
  Loading,
  CaloriesIntake,
  WeightTrack,
  TrackMacronutrients,
  DietOverviewTopBar,
  ActiveFoodFilters,
  DietMacrosOverview,
  Close,
} from "../../components";
import { useGetDietConfigQuery } from "../../generated/graphql";

export const DietOverview: React.FC<any> = ({ navigation }) => {
  const { loading, error, data } = useGetDietConfigQuery();

  if (loading || error) {
    return <Loading />;
  }

  if (data.getDietConfig.status === false) {
    //navigation.push("DietConfiguration");
    return (
      <View style={{ flex: 1, marginTop: 25, paddingRight: 5 }}>
        <Close isRegister pressed={() => navigation.goBack()} />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Pressable
            onPress={() => navigation.push("DietConfiguration")}
            style={styles.config}
          >
            <Text style={styles.configText}>CONFIGURE YOUR DIET </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <DietOverviewTopBar navigation={navigation} />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <DietMacrosOverview />
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
  config: {
    backgroundColor: "#FFD9D9",
    padding: 15,
    borderRadius: 14,
  },
  configText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#434343",
  },
});
