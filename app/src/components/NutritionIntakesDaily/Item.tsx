import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface Props {
  title: string;
  status: string;
  value: number;
  clicked: () => void;
}

const getColor = (value: number) => {
  if (value > 70)
    return {
      circle: "#b3d89c",
      box: "#d0efb18f",
    };
  else
    return {
      circle: "#ffaa5abd",
      box: "#ffd25a57",
    };
};

export const Item: React.FC<Props> = ({ status, title, value, clicked }) => {
  return (
    <Pressable
      onPress={() => clicked()}
      style={[styles.container, { backgroundColor: getColor(value).box }]}
    >
        <Text style={styles.txt}>{value > 100 ? 100 : value}%</Text>
        <View style={{ justifyContent: "center"}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.info}>{status}</Text>
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    backgroundColor: "#E3FFDC",
    padding: 12,
    borderRadius: 14,
    marginBottom: 5,
    height: 130,
    //borderWidth: 1,
    //borderColor: "#A7E19B",
  },
  row: {
    flexDirection: "row",
  },
  txt: {
    fontFamily: "AbFace",
    fontWeight: "bold",
    marginBottom: 5,
    color: "#434343",
    fontSize: 40,
  },
  circle: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FAA68D",
  },
  title: {
    fontFamily: "AbFace",
    fontSize: 21,
    color: "#434343",
  },
  info: {
    fontWeight: "400",
    fontFamily: "AvNext",
    color: "#434343",
    opacity: 0.8,
    marginTop: 5,
    fontSize: 12,
    display: 'none'
  },
});
