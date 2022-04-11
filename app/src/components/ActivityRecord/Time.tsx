import React from "react";
import { Pressable, View, Text, StyleSheet, SafeAreaView } from "react-native";

const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`;
};

interface Props{
  changeHours: (val: number) => void;
  changeMinutes: (val: number) => void;
}

export const ActivityTime: React.FC<Props> = ({changeMinutes, changeHours}) => {
  const [hours, setHours] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0);

  const handleTime = (action: string, time_cat: string) => {
    if (action == "longp") {
      // decrement
      if (time_cat == "hours")
      {
        changeHours(hours - 1 < 0 ? 0 : hours - 1 );
        setHours((curr) => (curr - 1 < 0 ? 0 : curr - 1));
      }
      else {
        changeMinutes(minutes - 1 < 0 ? 0 : minutes - 1 );
        setMinutes((curr) => (curr - 15 < 0 ? 0 : curr - 15));
      }
      } else if (action == "singlep") {
      // increment
      if (time_cat == "hours"){
        changeHours(hours + 1 > 4 ? 0 : hours + 1 );
        setHours((curr) => (curr + 1 > 4 ? 0 : curr + 1));
      }  
      else {
        changeMinutes(minutes + 15 > 59 ? 0 : minutes + 15 );
        setMinutes((curr) => (curr + 15 > 59 ? 0 : curr + 15));
      }  
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          onLongPress={() => handleTime("longp", "hours")}
          onPress={() => handleTime("singlep", "hours")}
          style={[styles.item, { alignItems: "flex-end" }]}
        >
          <Text style={styles.time}>{formatTime(hours)}</Text>
        </Pressable>
        <View style={{ width: "5%", alignItems: "center" }}>
          <Text style={styles.time}>:</Text>
        </View>
        <Pressable
          onLongPress={() => handleTime("longp", "minutes")}
          onPress={() => handleTime("singlep", "minutes")}
          style={styles.item}
        >
          <Text style={styles.time}>{formatTime(minutes)}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "45%",
    paddingHorizontal: 10,
  },
  time: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "helvitica-condesed",
    marginTop: 10,
  },
});
