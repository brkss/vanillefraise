import React from "react";
import {
  RefreshControl,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Loading,
  Heading,
  MoodStats,
  CaloriesOverview,
  NutritionOverview,
  MealsOverview,
} from "../../components";
import { useFonts } from "expo-font";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Overview: React.FC<any> = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (!helviticaCondensed) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Overview"} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          //bounces={false}
        >
          <CaloriesOverview refreshing={refreshing} />
          <MealsOverview navigation={navigation} />
          <View>
            <Text style={styles.subtitle}>About your mood</Text>
            <Text> According to your records </Text>
            <View style={{ marginBottom: 30 }}>
              <MoodStats refreshing={refreshing} />
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
