import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  onTimeChange: (time: Date) => void;
  onDateChange: (date: Date) => void;
}

export const TimeInput: React.FC<Props> = ({onTimeChange, onDateChange}) => {
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  
  const onChangeDate = (event: any, selectedDate: any) => {
    event.preventDefault();
    const currentDate = selectedDate || date;
    setDate(currentDate);
    onDateChange(date);
  };
  
  const onChangeTime = (e: any, selectedTime: any) => {
    e.preventDefault();
    const currentTime = selectedTime || time;
    setTime(currentTime);
    onTimeChange(time);
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      </View>
      <View style={[styles.item]}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChangeTime}
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
