import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Heading, InvisibleInput, Button, Loading } from "../../components";
import { useFonts } from "expo-font";
import { useMeQuery } from "../../generated/graphql";

export const PersonalInformation: React.FC = () => {
  const [form, SetForm] = React.useState({
    name: "",
    username: "",
    email: "",
  });
  const { loading, data, error } = useMeQuery({
    onCompleted: (d) => {
      if (d.me) {
        SetForm({
          email: d.me.email,
          name: d.me.name,
          username: d.me.username,
        });
      }
    },
  });
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const handleForm = (key: string, value: string) => {
    SetForm({
      ...form,
      [key]: value
    })
  }

  if (error || loading || !data) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Personal \nInformations"} />
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <InvisibleInput
              value={form.name}
              txtChange={(t) => handleForm('name', t)}
              label={"Name"}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <InvisibleInput
              value={form.username}
              txtChange={(t) => handleForm('username', t)}
              label={"Username"}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <InvisibleInput
              value={form.email}
              txtChange={(t) => handleForm('email', t) }
              label={"Email"}
            />
          </View>
          <Button txt={"SAVE"} clicked={() => {}} />
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
  inputGroup: {
    marginVertical: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.7,
  },
});
