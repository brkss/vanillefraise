import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props { 
  navigation: any
}

export const DietOverviewTopBar: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>DIET</Text>
      </View>
      <View style={[styles.item, { alignItems: "flex-end" }]}>
        <Ionicons name={"settings-outline"} size={30} onPress={() => navigation.push('DietConfiguration')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 7,
  },
  item: {
    width: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
