import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const ReportRecipe: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help make Vanille Fraise better.</Text>
      <Text style={styles.subtitle}>
        if you see missing ingredients, unclear instructions or something is off
        let me know by reporting this recipe. Thank you !
      </Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Report This Recipe.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  title: {
    //
  },
  subtitle: {
    //
  },
  btn: {
    //
  },
  btnText: {
    //
  },
});
