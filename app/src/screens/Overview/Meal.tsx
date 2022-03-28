import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import { Loading } from "../../components";

export const Meal: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    condensed: require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>BREAKFAST</Text>
        <View style={styles.row}>
          <Text style={styles.calories}>1100 Cal</Text>
          <Text style={styles.time}>⏱ 42min</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  title: {
    fontFamily: "condensed",
    fontSize: 35,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  calories: {
    //lineHeight: 25,
    color: "#434343",
    fontSize: 25,
    fontFamily: "condensed",
    fontWeight: "bold",
    width: "50%",
  },
  time: {
    fontFamily: "condensed",
    fontSize: 25,
    textAlign: "right",
    width: "50%",
  },
});
