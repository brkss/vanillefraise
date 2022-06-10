import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

interface Props {
  name: string;
  onTimeChange: (name: string, val: Date) => void;
  time: Date;
}

export const MealTime: React.FC<Props> = ({ name, onTimeChange, time: t }) => {
  const [time, setTime] = React.useState(t);
  const [visible, setVisible] = React.useState(false);

  const handleShowModal = () => {
    setVisible(true);
  };

  const handleHideModal = () => {
    setVisible(false);
  };

  const handleConfirm = (time: Date) => {
    onTimeChange(name, time);
    setTime(time);
    handleHideModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Pressable onPress={handleShowModal}>
        <Text style={styles.time}>{Moment(time).format("hh:mm a")}</Text>
      </Pressable>
      <DateTimePickerModal
        date={time}
        mode={"time"}
        onCancel={handleHideModal}
        isVisible={visible}
        onConfirm={(t) => handleConfirm(t)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 15,
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  time: {
    marginTop: -5,
    fontSize: 35,
    opacity: 0.7,
    fontWeight: "bold",
  },
});
