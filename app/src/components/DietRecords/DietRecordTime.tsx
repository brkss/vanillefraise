import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

interface Props {
  changed: (time: Date) => void;
}

export const DietRecordTime: React.FC<Props> = ({ changed }) => {
  const [time, setTime] = React.useState(new Date());
  const [visible, setVisible] = React.useState(false);

  const handleShowModal = () => {
    setVisible(true);
  };

  const handleHideModal = () => {
    setVisible(false);
  };

  const handleConfirm = (time: Date) => {
    changed(time);
    setTime(time);
    handleHideModal();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleShowModal}>
        <Text style={styles.time}>
          {Moment(time).format("DD/MM/YYYY \thh:mm a")}
        </Text>
      </Pressable>
      <DateTimePickerModal
        maximumDate={new Date()}
        date={time}
        mode={"datetime"}
        onCancel={handleHideModal}
        isVisible={visible}
        onConfirm={(t) => handleConfirm(t)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    //padding: 15,
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  time: {
    marginTop: -5,
    fontSize: 25,
    opacity: 0.7,
    fontWeight: "bold",
  },
});
