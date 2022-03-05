import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Loading, Heading, MoodStats, CaloriesOverview  } from "../../components";
import { useFonts } from 'expo-font';

export const Overview: React.FC = () => {
  
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if(!helviticaCondensed){
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Overview"} />
        <ScrollView bounces={false}>
          <CaloriesOverview />
          <Text style={styles.subtitle}>About your mood</Text>
          <View style={{ marginBottom: 30 }}>
            <MoodStats />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
