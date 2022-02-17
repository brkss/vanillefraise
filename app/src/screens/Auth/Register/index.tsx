import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import {
  RegisterIntro,
  RegisterInformation,
  Measurement,
} from "../../../components";
import { LinearGradient } from "expo-linear-gradient";

export const Register: React.FC = () => {
  const [status, setStatus] = React.useState("MEASUREMENT");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });

  //const pass = () => {};

  if (!helviticaCondensed) {
    return <View />;
  }

  return (
    <LinearGradient
      colors={["#FFD7D7", "#F5EBE0"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          {
            {
              INTRO: <RegisterIntro pass={() => {}} />,
              INFORMATION: <RegisterInformation />,
              MEASUREMENT: <Measurement />,
            }[status]
          }
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    //alignItems: "center",
    //justifyContent: "space-evenly",
  },
  content: {
    flex: 1,
  },
});
