import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  onClick: () => void;
}

export const SavedRecipesButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Pressable style={styles.container} onPress={() => onClick()}>
      <View style={styles.holder}>
        <Ionicons color={"#434343"} size={16} name={"bookmark"} />
        <Text style={styles.txt}>Saved Recipes</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 15,
    paddingLeft: 5,
    color: "#434343",
    fontWeight: 'bold'
  },
  holder: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: "#e6e9ff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
