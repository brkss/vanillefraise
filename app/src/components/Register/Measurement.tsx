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
        unit={"KG"}
        label={"WEIGHT"}
        txtChange={(t) => handleForm("weight", t)}
      />
      <InvisibleInput
        unit={"CM"}
        label={"HEIGHT"}
        txtChange={(t) => handleForm("height", t)}
      />
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#434343",
            fontFamily: "helvitica-condesed",
          }}
        >
          BIRTHDAY
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
        {/*
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            display={Platform.OS == "ios" ? "default" : "calendar"}
            onChange={(e: any, date: Date) => onChange(e, date)}
          />
        )}
        {Platform.OS == "android" && (
          <Pressable onPress={() => setShow((curr) => !curr)}>
            <Text style={styles.date}>{dayjs(date).format("DD/MM/YYYY")}</Text>
          </Pressable>
        )}*/}
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
});
