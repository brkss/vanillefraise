import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const ActivityCalorieChart: React.FC = () => {
  const data = {
    labels: ["09/07", "10/07", "11/07", "12/07", "13/07", "14/07"],
    datasets: [
      {
        data: [20, 145, 28, 80, 99, 43],
      },
    ],
  };

  const config = {
    backgroundColor: "#fff",
    //backgroundGradientFrom: "#ffe4d4",
    //backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Burned Calories</Text>
      <Text style={styles.subtitle}>last 7 days</Text>
      <View style={styles.chartContainer}>
        <LineChart
          bezier
          data={data}
          width={Dimensions.get("window").width + 50}
          height={200}
          chartConfig={{
            //backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            backgroundGradientToOpacity: 0,
            backgroundGradientFromOpacity: 0,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              backgroundColor: "#fff",
            },
            paddingRight: 0,
            barPercentage: 10,
          }}
          style={{ padding: 0, margin: 0, paddingLeft: 0 }}
          withInnerLines={false}
          //withVerticalLabels={false}
          withHorizontalLabels={false}
          withOuterLines={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#434343"
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.8,
    //fontWeight: "",
  },
  chartContainer: {
    marginLeft: -40,
  },
});
