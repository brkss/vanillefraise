import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  RefreshControl,
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
import { SafeAreaView } from "react-native-safe-area-context";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const DietOverview: React.FC<any> = ({ navigation }) => {
  const { loading, error, data, refetch } = useGetDietConfigQuery();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (loading || error) {
    return <Loading />;
  }

  if (data.getDietConfig.status === false) {
    //navigation.push("DietConfiguration");
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <SafeAreaView style={{ flex: 1 }}>
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
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <DietOverviewTopBar navigation={navigation} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <DietMacrosOverview refreshing={refreshing} />
          <ActiveFoodFilters refreshing={refreshing} />
          <CaloriesIntake refreshing={refreshing} />
          <WeightTrack refreshing={refreshing} />
          <TrackMacronutrients refreshing={refreshing} />
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
    paddingHorizontal: 25,
    borderRadius: 14,
  },
  configText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#434343",
  },
});
