import React from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { InvisibleInput, BasicInput } from "../General";
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
    if (!validateUsername(form.username.toLowerCase())) {
      setError("Invalid Username");
      return;
    }
    if (!validateEmail(form.email.toLowerCase())) {
      setError("Invalid Email");
      return;
    }
    const res = await check({
      variables: {
        username: form.username.toLowerCase(),
        email: form.email.toLowerCase(),
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
      email: form.email.toLowerCase(),
      password: form.password,
      username: form.username.toLowerCase(),
    };
    console.log("INFORMATION DATA => ", data);
    pass(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      style={styles.container}
    >
      <Text style={styles.heading}>Let's get started 🎉</Text>
		<View style={{height: 15}} />
	  {error ? <Error txt={error} close={() => setError("")} /> : null}
      <View style={styles.form}>
        <BasicInput
			placeholder="name"
			label={"Name"}
        	onChange={(v) => handleForm("name", v)}
        />
        <BasicInput
          placeholder="email"
          label={"Your Email"}
          onChange={(v) => handleForm("email", v)}
        />
        <BasicInput
          label={"Username ✨"}
		  placeholder={'username'}
          onChange={(v) => handleForm("username", v)}
        />
        <BasicInput
          isPassword
			placeholder="password"
          label={"Choose Password"}
          onChange={(v) => handleForm("password", v)}
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
    fontSize: 30,
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    color: "#434343",
  },
  form: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
