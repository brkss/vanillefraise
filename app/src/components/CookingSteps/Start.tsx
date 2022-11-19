import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useFonts } from "expo-font";
import { colors } from "../../utils";
import { RecipeServing } from "../Ingredient/Servings";

interface Props {
  finish: () => void;
  name: string;
  total: string;
  servings: number;
  onServingChange: (n: number) => void;
}

export const Start: React.FC<Props> = ({
  finish,
  name,
  total,
  servings,
  onServingChange,
}) => {
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  const alphaAnim = React.useRef(new Animated.Value(130)).current;
  const betaAnim = React.useRef(new Animated.Value(0)).current;
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const start = () => {
    Animated.timing(alphaAnim, {
      toValue: 1000,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(betaAnim, {
        toValue: 1400,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        finish();
      });
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
      <View style={{}} />
      {total !== "unknown" ? (
        <Text style={styles.time}>
          About <Text style={{ color: "black" }}>{total}min</Text> in total
        </Text>
      ) : null}
      <View style={{ width: "70%" }}>
        <RecipeServing
          onChange={(n) => onServingChange(n)}
          servings={servings}
          center
        />
      </View>
      <View style={styles.metadata}>
        <Text style={styles.info}>You’re cooking</Text>
        <Text style={styles.title}>{name}</Text>
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
      <Animated.View
        style={[
          styles.transistor,
          { height: betaAnim, width: betaAnim, borderRadius: betaAnim },
        ]}
      />
      <Text style={styles.cheers}>have fun 👨‍🍳</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  time: {
    fontSize: 18,
    fontFamily: "AvNextBold",
    color: "#2A2A2A",
    textAlign: "center",
    opacity: 0.8,
  },
  info: {
    fontSize: 20,
    opacity: 0.8,
    fontFamily: "AvNextBold",
    color: "#2A2A2A",
    textAlign: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 25,
    fontFamily: "AvNextBold",
    color: "#2A2A2A",
    textAlign: "center",
  },
  btn: {
    height: 100,
    width: 100,
    backgroundColor: "#FFC9C9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130,
  },
  btnTxt: {
    fontSize: 22,
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    marginBottom: -5,
  },
  cheers: {
    fontSize: 17,
    fontWeight: "400",
    opacity: 0.6,
  },
  metadata: {},
  transistor: {
    position: "absolute",
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#FBECEC",
    zIndex: 999,
  },
});
