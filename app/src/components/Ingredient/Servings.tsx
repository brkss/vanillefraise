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
      <View style={styles.row}>
        <View style={{width: '50%', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={[styles.label, { textAlign: center ? "center" : "center" }]}>
            Servings
          </Text>
        </View>
        <View style={[styles.row, {width: '50%', justifyContent: 'space-between', alignItems: 'center' }]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    marginTop: -20,
    marginBottom: 10,
    width: "100%",
    padding: 10,
    backgroundColor: '#F4F4F4',
    //paddingVertical: 20,
    borderRadius: 16,
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    //marginBottom: 10,
    justifyContent: "space-between",
  },
  val: {
    width: 30,
    justifyContent: "center",
    alignContent: "center",
    //backgroundColor: "red",
  },
  valTxt: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "AvNextBold",
  },
  btn: {
    //height: 17,
    //width: 17,
    paddingVertical: 8,
    paddingHorizontal: Platform.OS === "ios" ? 15 : 18,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#EEEDED",
    //backgroundColor: "#FFEAD9",
    borderRadius: 100,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
