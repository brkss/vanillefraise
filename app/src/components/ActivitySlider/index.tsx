import React from "react";
import { Pressable, ScrollView, Text, StyleSheet, View } from "react-native";

export const ActivitySlider: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.item}>
          <Text style={styles.itemTxt}>Schedule</Text>
        </Pressable>
        <Pressable style={[styles.item, { opacity: 0.7 }]}>
          <Text style={styles.itemTxt}>Now</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  itemTxt: {
    fontFamily: "helvitica-condesed",
    fontSize: 35,
    fontWeight: "bold",
  },
  item: {
    marginRight: 15,
  },
});
