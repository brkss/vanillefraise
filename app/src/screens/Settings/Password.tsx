import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, InvisibleInput, Heading } from "../../components/General";
import { Error } from "../../components";
import { useChangePasswordMutation } from "../../generated/graphql";
import { SafeAreaView } from "react-native-safe-area-context";

export const PasswordSettings: React.FC<any> = ({ navigation }) => {
  const [form, setForm] = React.useState<any>({});
  const [error, setError] = React.useState<string>("");
  const [change] = useChangePasswordMutation();

  const handleForm = (k: string, v: string) => {
    setForm({
      ...form,
      [k]: v,
    });
  };

  const submitPassword = () => {
    if (
      !form ||
      !form.newpassword ||
      !form.oldpassword ||
      !form.repeatedpassword
    ) {
      setError("Invalid Data !");
    }
    if (form.newpassword !== form.repeatedpassword) {
      setError("Passwords doesn't match !");
    }
    setError("");
    change({
      variables: {
        newpass: form.newpassword,
        oldpass: form.oldpassword,
      },
    }).then((res) => {
      console.log("Change password result !", res);
      if (!res.data.changePassword.status) {
        setError(res.data.changePassword.message);
      } else if (res.data.changePassword.status) {
        setForm({});
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Change \nPassword"} />

        {error ? <Error close={() => setError("")} txt={error} /> : null}

        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <InvisibleInput
            secure
            label={"Old Password"}
            txtChange={(v) => handleForm("oldpassword", v)}
            value={form.oldpassword}
          />
          <InvisibleInput
            secure
            label={"New Password"}
            txtChange={(v) => handleForm("newpassword", v)}
            value={form.newpassword}
          />
          <InvisibleInput
            secure
            label={"Repeat Password"}
            txtChange={(v) => handleForm("repeatedpassword", v)}
            value={form.repeatedpassword}
          />
          <Button txt={"Change"} clicked={() => submitPassword()} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
