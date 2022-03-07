import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useFonts } from "expo-font";
import { ActivityCategory } from "../../components";

export const NewActivity: React.FC<any> = ({ navigation }) => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.heading}>NEW{"\n"}Exercise.</Text>
        </View>
        <View>
          <ActivityCategory
            choosed={(catid: string, name: string) =>
              navigation.push("ConfigActivity", { catid: catid, name: name })
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
  heading: {
    fontFamily: "helvitica-condesed",
    fontSize: 60,
    color: "#434343",
    lineHeight: 60,
  },
});
