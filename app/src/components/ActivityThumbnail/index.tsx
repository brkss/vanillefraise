import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Svg, Polyline } from "react-native-svg";

export const ActivityThumbnail: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.time}>12-02-2022 08:54</Text>
          <Text style={styles.title}>Cloud Run</Text>
          <Text style={styles.value}>7,13 KM | 28 mins</Text>
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
    backgroundColor: "#0030FF",
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
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  time: {
    position: "absolute",
    top: 0,
    color: "white",
  },
});
