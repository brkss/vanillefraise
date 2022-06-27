import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { EmailVerificationModal } from './EmailVerificationModal';

export const EmailVerification: React.FC = () => {

  const [visibleModal, setVisibleModal] = React.useState(false);


  return (
    <Pressable onPress={() => setVisibleModal(true)} style={styles.container}>
      <Text style={styles.txt}>Welcome To The Party 🎉</Text>
      <Text style={styles.subtxt}>
        Please verify your email ! unverified accounts will be automatically
        suspended.
      </Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Done ? 👍</Text>
      </Pressable>
      <EmailVerificationModal closed={() => setVisibleModal(false)} isVisible={visibleModal} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#FFDB47",
  },
  txt: {
    fontWeight: "bold",
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
