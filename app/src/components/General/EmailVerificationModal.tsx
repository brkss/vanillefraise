import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useResendAccountVerificationMutation, useIsAccountVerifiedQuery } from '../../generated/graphql';


interface Props {
  isVisible: boolean;
  closed: () => void;
}

export const EmailVerificationModal: React.FC<Props> = ({
  isVisible,
  closed,
}) => {

  const [resend] = useResendAccountVerificationMutation();

  const handleResend = () => {
    resend().then(res => {
      if(!res.errors){
        alert(res.data.resendAccountVerification.message || "");
      }
    })
  }

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={closed}
      scrollHorizontal
      useNativeDriverForBackdrop
      swipeDirection={["down"]}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View>
        <View style={styles.container}>
          <Ionicons
            size={40}
            style={{ marginBottom: 10 }}
            name={"ios-information-circle-sharp"}
          />
          <Pressable onPress={() => handleResend()} style={styles.btn}>
            <Text style={styles.btnText}>Resend Verification Link ?</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Check If Verified ?</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    bottom: 0,
    minHeight: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#FFC9C9",
    padding: 15,
    width: "100%",
    borderRadius: 4,
    marginTop: 10,
  },
  btnText: {
    //color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
