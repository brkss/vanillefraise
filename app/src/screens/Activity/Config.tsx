import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { ActivityConfigNow } from "../../components";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export const ActivityConfig: React.FC<any> = ({ route, navigation }) => {
  const { catid, name } = route.params;
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) return <View />;

  return (
    <LinearGradient colors={["#FFE2E2", "#F5EBE0"]} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <ActivityConfigNow
          activity={name}
          start={() =>
              navigation.push("Active", {
                time: new Date().getTime(),
                catid: catid,
              })
            }
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
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
});
