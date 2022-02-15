import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { ActivityConfigNow } from "../../components";
import { useFonts } from "expo-font";

export const ActivityConfig: React.FC<any> = ({ navigation }) => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <ActivityConfigNow
            start={() =>
              navigation.push("Active", { time: new Date().getTime() })
            }
          />
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
});
