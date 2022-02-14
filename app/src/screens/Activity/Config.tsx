import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { ActivitySlider } from "../../components";
import { useFonts } from "expo-font";
import { colors } from "../../utils/colors";

export const ActivityConfig: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <ActivitySlider />
        </View>
        <View style={styles.content}>
          <Text style={styles.info}>
            You're playing something,{"\n"}For 1 hour.
          </Text>
          <Text style={styles.calories}>320 - 550 Cal</Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Start</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    textAlign: "center",
  },
  calories: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    marginTop: 20,
  },
  btn: {
    height: 150,
    width: 150,
    backgroundColor: colors.c4,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  btnText: {
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    fontSize: 32,
  },
});
