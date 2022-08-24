import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useActivitiesBurnedCaloriesDataQuery } from "../../generated/graphql";
import { Loading } from "../../components/General";
import Moment from "moment";

export const NutritionChart: React.FC = () => {
  const [data, setData] = React.useState<any>({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });
  const _results = useActivitiesBurnedCaloriesDataQuery({
    onCompleted: (res) => {
      if (res.activitiesBurnedCaloriesData.length > 0) {
        setData({
          labels: res.activitiesBurnedCaloriesData.map((d) =>
            Moment(d.date).format("DD/MM").toString()
          ),
          datasets: [
            {
              data: res.activitiesBurnedCaloriesData.map((d) => d.count),
            },
          ],
        });
      }
    },
  });

  if (_results.loading || _results.error) return <Loading />;

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
          data={{
            labels: _results.data.activitiesBurnedCaloriesData.map((d) =>
              Moment(d.date).format("DD/MM").toString()
            ),
            datasets: [
              {
                data: _results.data.activitiesBurnedCaloriesData.map(
                  (d) => d.count
                ),
              },
            ],
          }}
          width={Dimensions.get("window").width + 40}
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
    color: "#434343",
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
