import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Heading, InvisibleInput, Button, Loading } from "../../components";
import { useFonts } from "expo-font";
import {
  MeDocument,
  MeQuery,
  useMeQuery,
  useUpdateUserInfoMutation,
} from "../../generated/graphql";
import { SafeAreaView } from "react-native-safe-area-context";

export const PersonalInformation: React.FC = () => {
  const [form, SetForm] = React.useState({
    name: "",
    weight: -1,
    height: -1,
  });
  const { loading, data, error } = useMeQuery({
    onCompleted: (d) => {
      if (d.me) {
        SetForm({
          name: d.me.name,
          weight: d.me.weight,
          height: d.me.height,
        });
      }
    },
  });
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });
  const [update] = useUpdateUserInfoMutation();

  const handleForm = (key: string, value: string | number) => {
    SetForm({
      ...form,
      [key]: value,
    });
  };

  const updateInfo = () => {
    if (!form.name || form.height <= 0 || form.weight <= 0) return; // trigger error !
    update({
      variables: {
        weight: form.weight,
        height: form.height,
        name: form.name,
      },
      update: (store, { data }) => {
        if (!data || !data.updateInfo.status) return;
        const me = store.readQuery<MeQuery>({
          query: MeDocument,
        }).me;
        me.name = form.name;
        me.height = form.height;
        me.weight = form.weight;
        console.log("UPDATE THAT SHIT");
        store.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            me: me,
          },
        });
      },
    });
  };

  if (error || loading || !data || !helviticaCondensed) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Personal \nInformations"} />
        <KeyboardAvoidingView
          behavior={"padding"}
          style={{ flex: 1, justifyContent: "space-evenly" }}
        >
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <InvisibleInput
              value={form.name}
              txtChange={(t) => handleForm("name", t)}
              label={"Name"}
            />
          </View>
          <View style={[styles.inputGroup]}>
            <Text style={styles.label}>Weight (kg)</Text>
            <InvisibleInput
              value={form.weight.toString()}
              txtChange={(t) => handleForm("weight", parseInt(t))}
              label={"Weight"}
            />
          </View>
          <View style={[styles.inputGroup]}>
            <Text style={styles.label}>Height (cm)</Text>
            <InvisibleInput
              value={form.height.toString()}
              txtChange={(t) => handleForm("height", parseInt(t))}
              label={"Weight"}
            />
          </View>
          <Button txt={"SAVE"} clicked={() => {}} />
        </KeyboardAvoidingView>
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
