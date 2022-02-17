import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import {
  RegisterIntro,
  RegisterInformation,
  Measurement,
  RegisterGender,
  BMIResult,
  RegisterSpecialCondition,
  RegisterOutro,
} from "../../../components";
import { LinearGradient } from "expo-linear-gradient";

export const Register: React.FC<any> = ({ navigation }) => {
  const [status, setStatus] = React.useState("INTRO");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });

  //const pass = () => {};

  if (!helviticaCondensed) {
    return <View />;
  }

  return (
    /*
    <LinearGradient
      colors={["#FFD7D7", "#F5EBE0"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
    */
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          {
            {
              INTRO: (
                <RegisterIntro
                  login={() => navigation("login")}
                  pass={() => setStatus("INFORMATION")}
                />
              ),
              INFORMATION: (
                <RegisterInformation pass={() => setStatus("MEASUREMENT")} />
              ),
              MEASUREMENT: <Measurement pass={() => setStatus("GENDER")} />,
              GENDER: <RegisterGender pass={() => setStatus("RESULT")} />,
              RESULT: <BMIResult pass={() => setStatus("SC")} />,
              SC: (
                <RegisterSpecialCondition
                  other={() => navigation.push("osc")}
                  pass={() => setStatus("OUTRO")}
                />
              ),
              OUTRO: <RegisterOutro pass={() => {}} />,
            }[status]
          }
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6EAE0",
    padding: 15,
    //alignItems: "center",
    //justifyContent: "space-evenly",
  },
  content: {
    flex: 1,
  },
});
