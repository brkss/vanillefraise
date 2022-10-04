import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";
import { IMeasurementData } from "../../utils/types/Register";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from "moment";

interface Props {
  pass: (data: IMeasurementData) => void;
}

export const Measurement: React.FC<Props> = ({ pass }) => {
  const [visible, setVisible] = React.useState(false);
  const [show, setShow] = React.useState(Platform.OS == "ios");
  const [date, setDate] = React.useState(new Date("4/9/2000"));
  const [form, SetForm] = React.useState<any>({
    birth: date,
  });
  const handleForm = (key: string, value: string | Date) => {
    SetForm({
      ...form,
      [key]: value,
    });
  };

  const onChange = (event: any, selectedDate: Date) => {
    //event.preventDefault();
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log("CHANGE DATE !");
    handleForm("birth", currentDate);
  };

  const handleShowModal = () => {
    setVisible(true);
  };
  const handleHideModal = () => {
    setVisible(false);
  };

  const handleConfirm = (time: Date) => {
    setDate(time);
    handleForm("birth", time);
    handleHideModal();
  };

  const saveData = () => {
    if (
      !form ||
      !form.weight ||
      !form.height ||
      !form.birth ||
      !Number(form.weight) ||
      Number(form.weight) < 0 ||
      Number(form.height) < 0 ||
      !Number(form.height)
    )
      return;
    pass(form as any);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={styles.container}
    >
      <InvisibleInput
        unit={"kg"}
        label={"Weight"}
        txtChange={(t) => handleForm("weight", t)}
      />
      <InvisibleInput
        unit={"cm"}
        label={"Height"}
        txtChange={(t) => handleForm("height", t)}
      />
      <View>
        <Text
          style={{
            
          }}
        >
          Birthday
        </Text>
        <Pressable onPress={handleShowModal}>
          <Text style={styles.datevalue}>
            {Moment(date).format("DD/MM/YYYY")}
          </Text>
        </Pressable>
        <DateTimePickerModal
          maximumDate={new Date()}
          date={date}
          mode={"date"}
          onCancel={handleHideModal}
          isVisible={visible}
          onConfirm={(t) => handleConfirm(t)}
        />
      </View>
      <Button clicked={() => saveData()} txt={"NEXT"} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  date: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    fontFamily: "helvitica-condesed",
  },
  datevalue: {
    fontSize: 35,
    opacity: 0.8,
    color: "#434343",
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
  },
  label: {
	fontSize: 25,
	fontWeight: "bold",
	color: "#434343",
	fontFamily: "AvNextiBold",
  }
});
