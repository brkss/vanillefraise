import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { EmailVerificationModal } from "./EmailVerificationModal";

export const EmailVerification: React.FC = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  return (
    <Pressable onPress={() => setVisibleModal(true)} style={styles.container}>
      <Text style={styles.txt}>Welcome To The Party 🎉</Text>
      <Text style={styles.subtxt}>
        But first please verify your email ! you'll find a email in your inbox
        with a link to verify your account.
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
