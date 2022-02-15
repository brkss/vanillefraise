import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import { ActivitySlider, ActivityConfigNow } from "../../components";
import { useFonts } from "expo-font";

export const ActivityConfig: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const [status, SetStatus] = React.useState("SCHEDULE");

  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <ActivitySlider change={(s) => SetStatus(s)} />
        </View>
        <View style={styles.content}>
          {
            {
              SCHEDULE: <Text>schedule</Text>,
              NOW: <ActivityConfigNow />,
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
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
