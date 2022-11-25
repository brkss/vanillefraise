import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  pressed: () => void;
  txt: string;
  selected?: boolean;
  info: () => void;
  count: number;
}

export const FoodItem: React.FC<Props> = ({
  txt,
  pressed,
  selected,
  info,
  count,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: selected ? "#434343" : "transparent" },
      ]}
      onPress={pressed}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.circle,
            { backgroundColor: selected ? "#F3C1C1" : "#C3E7A7" },
          ]}
        >
          {!selected ? (
            <Ionicons
              size={20}
              style={{ marginRight: -2 }}
              name={"add-outline"}
            />
          ) : (
            <Ionicons
              size={20}
              style={{ marginRight: -2 }}
              name={"remove-outline"}
            />
          )}
          {/*<Text style={styles.circleTxt}>Text>*/}
        </View>
        <View>
          <Text style={styles.txt}>{txt}</Text>
          <Text style={styles.count}>{count} recipe available</Text>
        </View>
      </View>
      <Pressable style={styles.info} onPress={info}>
        <Text style={styles.infoText}>i</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#EEEDED",
    //backgroundColor: "#e8e8e8",
    flexDirection: "row",
    borderRadius: 7,
    alignItems: "center",
    borderColor: "#434343",
    borderWidth: 1,
    justifyContent: "space-between",
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: "black",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    top: -5,
  },
  infoText: {
    color: "white",
  },
  count: {
    fontSize: 12,
    fontWeight: "300",
    opacity: 0.7,
  },
  circleTxt: {
    fontFamily: "AvNextBold",
    fontSize: 20,
  },
});
