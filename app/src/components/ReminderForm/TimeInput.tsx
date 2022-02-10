import React from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const TimeInput: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    borderRadius: 7,
    backgroundColor: "#A4B2FF",
    marginBottom: 10,
  },
  input: {
    //backgroundColor: "#A4B2FF",
    width: "auto",
    color: "white",
  },
});
