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
  NutritionOverview,
  MealsOverview,
  TopBar,
  EmailVerification,
} from "../../components";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IsAccountVerifiedDocument,
  useIsAccountVerifiedQuery,
} from "../../generated/graphql";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
// TO DO FIX REFRESH !
export const Overview: React.FC<any> = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });
  const { data, error, loading, refetch } = useIsAccountVerifiedQuery();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      refetch();
    });
  }, []);

  if (!helviticaCondensed || loading || error) {
    return <Loading />;
  }

  return (
    <>
      {!data.isAccountVerified ? <EmailVerification /> : null}
      <View style={styles.container}>
        <SafeAreaView
          style={{
            flex: 1,
            marginBottom: Platform.OS === "ios" ? -40 : 0,
          }}
        >
          <ScrollView
            style={{ flex: 1 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
          >
            <TopBar navigation={navigation} />
   			<View style={{height: 10}} />         
			<CaloriesOverview
              dietPressed={() => navigation.push("DietConfiguration")}
              refreshing={refreshing}
            />
   			<View style={{height: 10}} />         
            <MealsOverview refreshing={refreshing} navigation={navigation} />
            <NutritionOverview
              clicked={(code: string, name: string) =>
                navigation.push("RecipesByNutritions", {
                  code: code,
                  name: name,
                })
              }
              refreshing={refreshing}
            />
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
    backgroundColor: "#f0f0f0",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
