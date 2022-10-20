import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { EmailVerificationModal } from "./EmailVerificationModal";

interface Props {
  title: string;
  msg: string;
}

export const EmailVerification: React.FC<Props> = ({msg, title}) => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  return (
    <Pressable onPress={() => setVisibleModal(true)} style={styles.container}>
      <Text style={styles.txt}>{title}</Text>
      <Text style={styles.subtxt}>
        {msg}
      </Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Done ? 👍</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fce583",
    borderRadius: 15,
    marginBottom: 15,
  },
  txt: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 17,
  },
  subtxt: {
    opacity: 0.7,
    fontSize: 14,
    marginTop: 4,
  },
  btn: {
    width: 100,
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#434343",
    borderRadius: 50,
    marginTop: 10,
    display: "none",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
