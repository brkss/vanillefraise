import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import {
  Start,
  IngredientStep,
  InstructionsStep,
  FinishStep,
} from "../../components";
import { useFonts } from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils";

export const Cooking: React.FC<any> = ({ navigation }) => {
  const [step, SetStep] = React.useState("start");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const changeStep = (s: string) => {
    SetStep(s);
  };

  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.top}>
          <AntDesign
            name={"closecircle"}
            onPress={() => navigation.goBack()}
            size={33}
            style={{ opacity: 0.7 }}
          />
        </View>

        <View style={styles.content}>
          {
            {
              start: <Start finish={() => changeStep("ingredients")} />,
              ingredients: (
                <IngredientStep finish={() => changeStep("instructions")} />
              ),
              instructions: (
                <InstructionsStep finish={() => changeStep("finish")} />
              ),
              finish: (
                <FinishStep
                  restart={() => changeStep("start")}
                  finish={() => navigation.goBack()}
                />
              ),
            }[step]
          }
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.c2,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  top: {
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
  },
  cancelBtn: {
    backgroundColor: "#4A4848",
    padding: 8,
    borderRadius: 7,
    minWidth: 100,
  },
  cancelBtnText: {
    color: "white",
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
});
