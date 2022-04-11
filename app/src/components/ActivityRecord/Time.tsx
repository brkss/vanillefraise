import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`;
};

export const ActivityTime: React.FC = () => {
  const [hours, setHours] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.time}>{formatTime(hours)}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.time}>{formatTime(minutes)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
  },
  time: {
    fontWeight: "bold",
  },
});
