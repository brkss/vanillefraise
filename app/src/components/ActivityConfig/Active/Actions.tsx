import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface Props {
  stop: () => void;
}

export const ActiveAction: React.FC<Props> = ({ stop }) => {
  const [showHint, SetShowHint] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Pressable
          onLongPress={() => stop()}
          onPress={() => SetShowHint(true)}
          style={styles.btn}
        >
          <Text style={styles.btnText}>STOP</Text>
        </Pressable>
      </View>
      {showHint ? <Text style={styles.hint}>Keep pressing to stop</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flexDirection: "row",
    alignItems: "center",
  },
  item: {
    width: "50%",
    padding: 5,
  },
  btn: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#434343",
    borderRadius: 40,
  },
  btnText: {
    color: "white",
    fontSize: 26,
    fontFamily: "helvitica-condesed",
    marginBottom: 7,
  },
  hint: {
    fontFamily: "helvitica-condesed",
    textAlign: "center",
    color: "white",
    marginBottom: 5,
    fontSize: 20,
    opacity: 0.8,
  },
});
