import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useFonts } from "expo-font";

interface Props {
  finish: () => void;
}

export const Start: React.FC<Props> = ({ finish }) => {
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const alphaAnim = React.useRef(new Animated.Value(130)).current;
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const start = () => {
    Animated.timing(alphaAnim, {
      toValue: 1000,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      finish();
    });
  };

  if (!helviticaCondensed)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading..</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={{ height: 100 }} />
      <Text style={styles.time}>About 28 mins in total</Text>
      <View style={styles.metadata}>
        <Text style={styles.info}>You’re cooking</Text>
        <Text style={styles.title}>Spicy Tempeh {"\n"} Crumble Bowl</Text>
      </View>
      <AnimatedTouchableOpacity
        onPress={() => start()}
        style={[
          styles.btn,
          { borderRadius: alphaAnim, height: alphaAnim, width: alphaAnim },
        ]}
      >
        <Text style={styles.btnTxt}>Start</Text>
      </AnimatedTouchableOpacity>
      <Text style={styles.cheers}>have fun 👨‍🍳</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  time: {
    fontSize: 25,
    fontFamily: "helvitica-condesed",
    color: "#2A2A2A",
    textAlign: "center",
    opacity: 0.8,
  },
  info: {
    fontSize: 25,
    opacity: 0.8,
    fontFamily: "helvitica-condesed",
    color: "#2A2A2A",
    textAlign: "center",
  },
  title: {
    fontSize: 35,
    fontFamily: "helvitica-condesed",
    color: "#2A2A2A",
    textAlign: "center",
  },
  btn: {
    height: 130,
    width: 130,
    backgroundColor: "#FCE3A0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130,
  },
  btnTxt: {
    fontSize: 27,
    fontFamily: "helvitica-condesed",
    fontWeight: "bold",
    marginBottom: 5,
  },
  cheers: {
    fontSize: 20,
    fontWeight: "400",
    opacity: 0.6,
  },
  metadata: {},
});
