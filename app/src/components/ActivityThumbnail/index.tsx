import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Svg, Polyline } from "react-native-svg";
import { colors } from "../../utils/colors";
import Moment from "moment";

interface Props {
  feedback: string;
  value: number;
  unit: string;
  time: string;
}

export const ActivityThumbnail: React.FC<Props> = ({
  unit,
  time,
  value,
  feedback,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.time}>
            {" "}
            {Moment(time).format("DD/MM/YYYY HH:mm")}{" "}
          </Text>
          <Text style={styles.title}>
            {value} {unit}
          </Text>
          <Text style={styles.value}>NO FEEDBACK</Text>
        </View>
        <View style={styles.chart}>
          <Svg height="100" width="100">
            <Polyline
              points="0,76 50,84 100,30"
              fill="none"
              stroke="#FFB119"
              strokeWidth="3"
            />
          </Svg>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 13,
    //backgroundColor: "#E6E6E6",
    //backgroundColor: "#0030FF",
    backgroundColor: colors.c3,
    borderColor: colors.c1,
    borderWidth: 1,

    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  info: {
    width: "70%",
    justifyContent: "flex-end",
  },
  chart: {
    width: "30%",
    opacity: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    //color: "white",
    color: "#434343",
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#434343",
    marginTop: 5,
    opacity: 0.8,
  },
  time: {
    position: "absolute",
    top: 0,
    color: "#434343",
  },
});
