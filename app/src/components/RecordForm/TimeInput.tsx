import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const TimeInput: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (event: any, selectedDate: any) => {
    event.preventDefault();
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
      <View style={[styles.item]}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row-reverse",
  },
  item: {
    width: "40%",
  },
});
