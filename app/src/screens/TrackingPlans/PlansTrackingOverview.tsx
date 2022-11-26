import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import { TrackedElement, Loading } from "../../components";
import { useTrackingQuery } from "../../generated/graphql";

const wait = async (time: number) => {
  return new Promise((resolve, _) => setTimeout(resolve, time));
};

export const PlansTrackingOverview: React.FC<any> = ({ navigation }) => {
  const { data, error, loading, refetch } = useTrackingQuery();
  const [refreshing, setRefreshing] = React.useState(false);

  if (loading || error) return <Loading />;

  const handleRefresh = async () => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      refetch();
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Tracking Nutrition Plans</Text>
        {data?.tracking.length > 0 ?
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        >
          {data?.tracking.map((plan, key) => (
            <View key={key}>
              <Text
                style={[
                  styles.title,
                  {
                    fontSize: 20,
                    textAlign: "left",
                    padding: 10,
                    paddingBottom: 0,
                  },
                ]}
              >
                {plan.plan.name}
              </Text>
              {plan.elements.map((elm, key) => (
                <TrackedElement
                  current={elm.current}
                  name={elm.name}
                  target={elm.target}
                  unit={elm.unit}
                  key={key}
                  clicked={() => navigation.navigate('NutritionInfo', {code: elm.code, title: elm.name, id: elm.id})}
                />
              ))}
            </View>
          ))}
        </ScrollView> : 
        <View
          style={[
            styles.content,
            //{ display: data?.tracking.length === 0 ?  : "none" },
          ]}
        >
          <Text style={styles.subtitle}>no selected plans.</Text>
          <Pressable
            onPress={() => navigation.navigate("Plans")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Select Plans</Text>
          </Pressable>
        </View>}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: "AvNextBold",
    //textAlign: "center",
    color: "#434343",
    marginTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.7,
    fontFamily: "AvNextBold",
    marginBottom: 15,
  },
  btn: {
    paddingVertical: 17,
    borderRadius: 8,
    paddingHorizontal: 45,
    backgroundColor: "#434343",
  },
  btnText: {
    color: "white",
    fontFamily: "AvNextBold",
    fontSize: 18,
  },
});
