import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export const Intro: React.FC<any> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#fff", "#fbeaea"]}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.content}>
        <ImageBackground
          style={{ height: 200, justifyContent: "center" }}
          source={require("../../assets/oval.png")}
        >
          <Text style={styles.title}>Vanille Fraise</Text>
        </ImageBackground>
        <View style={styles.txtContainer}>
          <Text style={styles.subtitle}>Hey! 👋</Text>
          <Text style={styles.description}>
            we help you balance your nutrition, prevent diseases, live longer
            and heltier
          </Text>
        </View>
        <View style={styles.actions}>
          <Pressable
            onPress={() => navigation.push("register")}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.push("login")}
            style={[
              styles.btn,
              { borderColor: "#979797", backgroundColor: "transparent" },
            ]}
          >
            <Text style={styles.btnText}>Already have an account ?</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    //flexGrow: 5,
    width: width,
    backgroundColor: "pink",
    height: height,
  },
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontFamily: "AbFace",
    fontWeight: "bold",
    fontSize: 35,
    color: "#434343",
  },
  subtitle: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 20,
    color: "#434343",
  },
  description: {
    //
    textAlign: "center",
    marginTop: 10,
  },
  txtContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    display: "none",
  },
  actions: {
    //
  },
  btn: {
    padding: 20,
    backgroundColor: "#FDDEDE",
    width: width * 0.9,
    marginBottom: 10,
    borderRadius: 18,
    borderColor: "transparent",
    borderWidth: 2,
  },
  btnText: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
