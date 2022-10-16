import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  isVisible: boolean;
  closed: () => void;
}

export const NutritionPlanInfoModal: React.FC<Props> = ({
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
            Nutrition plans help you improve specific health area with nutrition
            such as (focus, memory, hair health, skin health ect..),When you
            apply selected plan it automaticlly track the nutrients with the
            given recomendation. You can personalize and cufigure your own
            nutrition plan according to your doctor recomendations !
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
    lineHeight: 20,
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
