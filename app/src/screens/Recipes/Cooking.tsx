import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Start, IngredientStep, InstructionsStep } from "../../components";
import { useFonts } from "expo-font";

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
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {
            {
              start: <Start finish={() => changeStep("ingredients")} />,
              ingredients: (
                <IngredientStep finish={() => changeStep("instructions")} />
              ),
              instructions: <InstructionsStep />,
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
    backgroundColor: "#FBF0D3",
  },
  content: {
    flex: 1,
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
