import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  txt: string;
  index: number;
}

export const Item: React.FC<Props> = ({ txt, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.numItem}>
          <View style={styles.num}>
            <Text style={styles.numText}>{index}</Text>
          </View>
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
    marginTop: -2,
    backgroundColor: "black",
    color: "white",
    width: 25,
    height: 25,
    //borderRadius: 20,
    //fontSize: 17,
    alignItems: "center",
    paddingTop: 5,
    //fontWeight: "bold",
    //textAlign: "center",
    justifyContent: "center",
    //fontFamily: "AvNextBold",
  },
  txt: {
    fontSize: 16,
    lineHeight: 20,
    width: "90%",
    fontWeight: "900",
    fontFamily: "AvNext",
  },
  numItem: {
    padding: 5,
    width: "10%",
    alignItems: "flex-start",
    //justifyContent: "center",
  },
  txtItem: {
    width: "90%",
  },
  numText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: 'AbFace',
    //fontFamily: "AvNextBold",
    marginTop: -5,
    //
  },
});
