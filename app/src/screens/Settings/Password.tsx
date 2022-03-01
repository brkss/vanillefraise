import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Button, InvisibleInput, Heading } from "../../components/General";

export const PasswordSettings: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Heading title={"Change \nPassword"} />

        <View style={{flex: 1, justifyContent: 'space-evenly'}}>
          <InvisibleInput label={"Old Password"} txtChange={(v) => {}} />
          <InvisibleInput label={"New Password"} txtChange={(v) => {}} />
          <InvisibleInput label={"Repeat Password"} txtChange={(v) => {}} />
          <Button txt={"Change"} clicked={() => {}} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
});
