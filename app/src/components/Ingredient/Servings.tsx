import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

interface Props {
  onChange: (n: number) => void;
  servings: number;
  center?: boolean;
}

export const RecipeServing: React.FC<Props> = ({
  onChange,
  servings,
  center,
}) => {
  const [serv, SetServ] = React.useState(servings);

  const more = () => {
    if (serv < 99) {
      const tmp = serv;
      SetServ((curr) => curr + 1);
      onChange(tmp + 1);
    }
  };

  const less = () => {
    if (serv > 1) {
      const tmp = serv;
      SetServ((curr) => curr - 1);
      onChange(tmp - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { textAlign: center ? "center" : "center" }]}>
        🍽 Servings
      </Text>
      <View style={styles.row}>
        <Pressable onPress={() => more()} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
        <View style={styles.val}>
          <Text style={styles.valTxt}>{serv}</Text>
        </View>
        <Pressable onPress={() => less()} style={styles.btn}>
          <Text style={[styles.btnText, { fontSize: 22 }]}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    marginBottom: 25,
    //backgroundColor: "#E8E7E1",
    padding: 10,
    //paddingVertical: 20,
    //borderRadius: 22,
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
  },
  val: {
    width: 30,
    justifyContent: "center",
    alignContent: "center",
    //backgroundColor: "red",
  },
  valTxt: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "AvNextBold",
  },
  btn: {
    //height: 17,
    //width: 17,
    paddingVertical: 13,
    paddingHorizontal: Platform.OS === "ios" ? 20 : 23,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#434343",
    //backgroundColor: "#FFEAD9",
    borderRadius: 16,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
