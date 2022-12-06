import React from "react";
import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button, Error, BasicInput } from "../../components";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { AuthContext } from "../../utils/auth/AuthProvider";
import { useLoginMutation } from "../../generated/graphql";
import * as SecureStorage from "expo-secure-store";
import { setAccessToken } from "../../utils";
import { RESET_PASSWORD_URL } from "../../utils/config/defaults";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const Login: React.FC = () => {
  const _ctx = React.useContext(AuthContext);
  const opacity = useSharedValue(1);
  const offset = useSharedValue(-200);
  const statusOpacity = useSharedValue(0);
  const statusOffset = useSharedValue(70);
  const [error, setError] = React.useState("");
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const [login] = useLoginMutation();

  const handleResetPassword = () => {
    if (!Linking.canOpenURL(RESET_PASSWORD_URL)) return;
    Linking.openURL(RESET_PASSWORD_URL);
  };

  const handleForm = (id: string, val: string) => {
    setForm({
      ...form,
      [id]: val,
    });
  };

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      setError("Invalid entry please check you data ");
      return;
    }
    //setError("");
    Keyboard.dismiss();
    handleAnimationIn();
    await wait(1500);
    login({
      variables: {
        email: form.username.toLowerCase(),
        password: form.password,
      },
    })
      .then(async (res) => {
        if (!res || !res.data || res.errors) {
          setError("Something went wrong, please try again. ");
          handleAnimationOut();
          return;
        } else if (!res.data.login.status) {
          setError(
            res.data.login.message || "Something went wrong please try again"
          );
          handleAnimationOut();
          return;
        } else if (res.data.login.token && res.data.login.rToken) {
          const _token = res.data.login.token;
          const _refreshToken = res.data.login.rToken;
          await SecureStorage.setItemAsync("TOKEN", _refreshToken);
          setAccessToken(_token);
          _ctx.login(_token);
        }
      })
      .catch((e) => {
        setError("something went wrong, please try again. ");
        handleAnimationOut();
        return;
      });
  };

  const handleAnimationOut = () => {
    opacity.value = withDelay(500, withTiming(1, { duration: 500 }));
    offset.value = withDelay(0, withTiming(-200, { duration: 400 }));
    statusOpacity.value = withDelay(0, withTiming(0, { duration: 500 }));
    statusOffset.value = withTiming(70, { duration: 500 });
  };

  const handleAnimationIn = () => {
    opacity.value = withDelay(0, withTiming(0, { duration: 500 }));
    offset.value = withDelay(500, withTiming(0, { duration: 700 }));
    statusOpacity.value = withDelay(900, withTiming(1, { duration: 500 }));
    statusOffset.value = withDelay(1000, withTiming(70, { duration: 500 }));
  };

  const statusStyle = useAnimatedStyle(() => {
    return {
      opacity: statusOpacity.value,
      transform: [{ translateY: statusOffset.value }],
      //top: statusOffset.value,
    };
  });
  const boxStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"} enabled>
          <View style={styles.center}>
            <Animated.Image
              style={[styles.image, imageStyle]}
              source={require("../../assets/icon.png")}
            />
            <Animated.Text style={[styles.status, statusStyle]}>
              ❤️ Linking your account...
            </Animated.Text>
            <Animated.View style={[styles.box, boxStyle, { marginTop: 80 }]}>
              <View style={{ height: 20 }} />
              <BasicInput
                label="Username"
                onChange={(t) => handleForm("username", t)}
                placeholder={"username / email"}
              />
              <View style={{ height: 10 }} />
              <BasicInput
                isPassword
                label="Password"
                onChange={(t) => handleForm("password", t)}
                placeholder={"*********"}
              />
              <View style={{ height: 10 }} />
              <Pressable onPress={() => handleResetPassword()}>
                <Text
                  style={{
                    fontWeight: "700",
                    //fontFamily: "AvNext",
                    fontSize: 15,
                    opacity: 0.6,
                  }}
                >
                  Forget your password ?
                </Text>
              </Pressable>
              <View style={{ height: 0 }} />
              {error ? (
                <Error txt={error} close={() => setError("")} />
              ) : (
                <Text style={styles.title}></Text>
              )}
              <Button txt={"Login"} clicked={() => handleLogin()} />
            </Animated.View>
          </View>
        </KeyboardAvoidingView>
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
    position: "absolute",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#434343",
    marginBottom: 10,
    fontFamily: "AvNextBold",
  },
  box: {
    width: "90%",
    alignItems: "flex-start",
    opacity: 0,
    marginTop: 50,
  },
  status: {
    fontWeight: "bold",
    position: "absolute",
    fontFamily: "AvNextBold",
    fontSize: 17,
    color: "#434343",
  },
  
});
