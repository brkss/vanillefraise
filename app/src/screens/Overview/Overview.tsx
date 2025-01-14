import React from "react";
import {
  RefreshControl,
  View,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import {
  Loading,
  CaloriesOverview,
  MealsOverview,
  TopBar,
  NutritionIntakeDaily,
  RecomendedRecipes,
  EmailVerification,
  GroceryOverviewPanel,
} from "../../components";
import { useIsAccountVerifiedQuery } from "../../generated/graphql";

import { SafeAreaView } from "react-native-safe-area-context";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
// TO DO FIX REFRESH !
export const Overview: React.FC<any> = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const { data, error, loading, refetch } = useIsAccountVerifiedQuery();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      refetch();
    });
  }, []);

  if (loading || error) return <Loading />;

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView
          style={{
            flex: 1,
            marginBottom: Platform.OS === "ios" ? -40 : 0,
          }}
        >
          <ScrollView
            style={{ flex: 2 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
          >
            {!data.isAccountVerified.status && (
              <EmailVerification
                title={data.isAccountVerified.title}
                msg={data.isAccountVerified.message}
              />
            )}
            <TopBar navigation={navigation} />
            <View style={{ height: 20 }} />
            <CaloriesOverview
              dietPressed={() => navigation.push("DietConfiguration")}
              refreshing={refreshing}
            />
            <View style={{ height: 35 }} />
            <MealsOverview refreshing={refreshing} navigation={navigation} />
            <View style={{ height: 0 }} />
            <GroceryOverviewPanel
              refreshing={refreshing}
              view={() => navigation.navigate("GroceryList")}
            />
            <View style={{ height: 35 }} />
            <RecomendedRecipes
              refreshing={refreshing}
              navigation={navigation}
            />
            <View style={{ height: 55 }} />
            <NutritionIntakeDaily
              refreshing={refreshing}
              navigation={navigation}
            />
            {/*
			<NutritionOverview
              clicked={(code: string, name: string) =>
                navigation.push("RecipesByNutritions", {
                  code: code,
                  name: name,
                })
              }
              refreshing={refreshing}
            />
			*/}
            <View style={{ height: 100 }} />
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
