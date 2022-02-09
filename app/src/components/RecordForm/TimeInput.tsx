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
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
