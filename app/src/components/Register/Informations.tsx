import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";
import { IInformationData } from "../../utils/types/Register";

interface Props {
  pass: (data: IInformationData) => void;
}

export const RegisterInformation: React.FC<Props> = ({ pass }) => {
  const [form, SetForm] = React.useState<any>({});

  const handleForm = (key: string, val: string) => {
    SetForm({
      ...form,
      [key]: val,
    });
  };

  const handleSendingData = () => {
    if (!form || !form.name || !form.email || !form.password) return;
    // trigger error !
    const data: IInformationData = {
      name: form.name,
      email: form.email,
      password: form.password,
      username: form.email,
    };
    console.log("INFORMATION DATA => ", data);
    pass(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Basic {"\n"}Informations</Text>
      <View style={styles.form}>
        <InvisibleInput
          label={"NAME"}
          txtChange={(v) => handleForm("name", v)}
        />
        <InvisibleInput
          type={"emailAddress"}
          label={"EMAIl"}
          txtChange={(v) => handleForm("email", v)}
        />
        <InvisibleInput
          label={"USERNAME"}
          txtChange={(v) => handleForm("username", v)}
        />
        <InvisibleInput
          secure
          label={"PASSWORD"}
          txtChange={(v) => handleForm("password", v)}
        />
        <InvisibleInput secure label={"RE-PASSWORD"} txtChange={(v) => {}} />
        <Button txt={"SAVE"} clicked={() => handleSendingData()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 10,
    fontSize: 40,
    fontFamily: "helvitica-condesed",
    fontWeight: "bold",
    color: "#434343",
  },
  form: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
