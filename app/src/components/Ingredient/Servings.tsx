import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  onChange: (n: number) => void;
  servings: number;
}

export const RecipeServing: React.FC<Props> = ({ onChange, servings }) => {
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
      <Text style={styles.label}>Servings</Text>
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
  container: {},
  label: {
    fontSize: 17,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
  },
  val: {
    width: 30,
    justifyContent: "center",
    alignContent: "center",
    //backgroundColor: "red",
  },
  valTxt: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    //height: 17,
    //width: 17,
    paddingVertical: 3,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#0C090D",
    //backgroundColor: "#FFEAD9",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
