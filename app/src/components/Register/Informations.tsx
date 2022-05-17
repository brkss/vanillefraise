import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { InvisibleInput } from "../General/InvisibleInput";
import { Button } from "../General/Button";
import { IInformationData } from "../../utils/types/Register";
import { useCheckInfoValidtyMutation } from "../../generated/graphql";
import { Error } from "../General/Error";
import { validateEmail, validateUsername } from "../../utils/modules/validate";

interface Props {
  pass: (data: IInformationData) => void;
}

export const RegisterInformation: React.FC<Props> = ({ pass }) => {
  const [error, setError] = React.useState("");
  const [form, SetForm] = React.useState<any>({});
  const [check] = useCheckInfoValidtyMutation();
  const handleForm = (key: string, val: string) => {
    SetForm({
      ...form,
      [key]: val,
    });
  };

  const handleSendingData = async () => {
    if (
      !form ||
      !form.name ||
      !form.email ||
      !form.username ||
      !form.password
    ) {
      setError("Invalid Data");
      return;
    }
    if (form.password !== form.repassword) {
      setError("passwords doesn't match !");
      return;
    }
    if (!validateUsername(form.username)) {
      setError("Invalid Username");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Invalid Email");
      return;
    }
    const res = await check({
      variables: {
        username: form.username,
        email: form.email,
      },
    });
    if (
      res.errors ||
      !res.data.checkInfoValidity.email ||
      !res.data.checkInfoValidity.username
    ) {
      setError(
        `Invalid ${!res.data.checkInfoValidity.email ? "Email" : ""} ${
          !res.data.checkInfoValidity.email &&
          !res.data.checkInfoValidity.username
            ? "and"
            : ""
        } ${!res.data.checkInfoValidity.username ? "Username" : ""}`
      );
      return;
    }
    // trigger error !
    const data: IInformationData = {
      name: form.name,
      email: form.email,
      password: form.password,
      username: form.username,
    };
    console.log("INFORMATION DATA => ", data);
    pass(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={styles.container}
    >
      <Text style={styles.heading}>Basic {"\n"}Informations</Text>
      {error ? <Error txt={error} close={() => setError("")} /> : null}
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
        <InvisibleInput
          secure
          label={"RE-PASSWORD"}
          txtChange={(v) => handleForm("repassword", v)}
        />
        <Button txt={"NEXT"} clicked={() => handleSendingData()} />
      </View>
    </KeyboardAvoidingView>
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
