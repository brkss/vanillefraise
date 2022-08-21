import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "../../components";


export const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.center}>
          <Image
            style={styles.image}
            source={require("../../assets/icon.png")}
          />
          <View style={styles.box}>
            <Text style={styles.title}>Login</Text>
            <Input label={"username / email"} onChange={(t) => {}} />
            <Input label={"password"} password onChange={(t) => {}} />
            <Button txt={"Login"} clicked={() => {}} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 200,
    top: 100
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#434343",
    marginBottom: 10,
  },
  box: {
    width: "80%",
    alignItems: "flex-start",
  },
});
