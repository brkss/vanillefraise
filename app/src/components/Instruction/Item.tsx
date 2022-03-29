import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

interface Props {
  txt: string;
  index: number;
}

export const Item: React.FC<Props> = ({ txt, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.numItem}>
          <Text style={styles.num}>{index}</Text>
        </View>
        <View style={styles.txtItem}>
          <Text style={styles.txt}>{txt}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 20,
    //backgroundColor: colors.c2,
    borderRadius: 13,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  num: {
    backgroundColor: "black",
    color: "white",
    width: 30,
    height: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 2,
  },
  txt: {
    fontSize: 16,
    lineHeight: 20,
    width: "90%",
  },
  numItem: {
    padding: 5,
    width: "10%",
    alignItems: "center",
    //justifyContent: "center",
  },
  txtItem: {
    width: "90%",
  },
});
