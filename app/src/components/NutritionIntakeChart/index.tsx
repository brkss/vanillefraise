import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useNutritionIntakeChartQuery } from "../../generated/graphql";
import { Loading } from "../../components/General";
import Moment from "moment";

interface Props {
  code: string;
  title: string;
}

export const NutritionIntakeChart: React.FC<Props> = ({ code, title }) => {
  const [data, setData] = React.useState<any>({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  });
  const _results = useNutritionIntakeChartQuery({
    variables: {
      code: code,
    },
    onCompleted: (res) => {
      if (res.nutritionIntakeChart.length > 0) {
        setData({
          labels: res.nutritionIntakeChart
            .reverse()
            .map((d) => Moment(d.date).format("DD/MM").toString()),
          datasets: [
            {
              data: res.nutritionIntakeChart.reverse().map((d) => d.intake),
            },
          ],
        });
      }
    },
  });

  if (_results.loading || _results.error)
    return (
      <View
        style={{ height: 250, justifyContent: "center", alignItems: "center" }}
      >
        <Text
          style={{
            display: "none",
            fontWeight: "bold",
            fontFamily: "AvNextBold",
          }}
        >
          ✨ Loading Data..
        </Text>
      </View>
    );

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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>last 7 days</Text>
      <View style={styles.chartContainer}>
        <LineChart
          bezier
          data={{
            labels: _results.data.nutritionIntakeChart
              .reverse()
              .map((d) => Moment(d.date).format("DD/MM").toString()),
            datasets: [
              {
                data: _results.data.nutritionIntakeChart
                  .reverse()
                  .map((d) => d.intake),
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
