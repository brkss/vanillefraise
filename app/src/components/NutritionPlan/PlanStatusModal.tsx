import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  isVisible: boolean;
  closed: () => void;
}

export const NutritionPlanStatusModal: React.FC<Props> = ({
  closed,
  isVisible,
}) => {
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
          <Text style={styles.info}>
            Nutrition Plans will be available starting from Vanille Fraise's
            next version, STAY TUNED this feature is the first step to
            accomplish the vision behind Vanille Fraise.
          </Text>
        </View>
      </View>
    </Modal>
  );
  //
};
const styles = StyleSheet.create({
  info: {
    fontSize: 15,
    fontFamily: "AvNextBold",
    lineHeight: 22,
    color: "#434343",
  },
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
});
