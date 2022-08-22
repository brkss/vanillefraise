import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button, Error } from "../../components";
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
          setError("something went wrong, please try again. ");
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
    //
    //setError("Invalid Password !");
    //handleAnimationOut();
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
        <View style={styles.center}>
          <Animated.Image
            style={[styles.image, imageStyle]}
            source={require("../../assets/icon.png")}
          />
          <Animated.Text style={[styles.status, statusStyle]}>
            ❤️ Linking your account...
          </Animated.Text>
          <Animated.View style={[styles.box, boxStyle]}>
            {error ? <Error txt={error} close={() => setError("")} /> : null}
            <Text style={styles.title}>Login</Text>
            <Input
              label={"username / email"}
              onChange={(t) => handleForm("username", t)}
            />
            <Input
              label={"password"}
              password
              onChange={(t) => handleForm("password", t)}
            />
            <Button
              //bg={"#FFD9D9"}
              //color={"#434343"}
              txt={"Login"}
              clicked={() => handleLogin()}
            />
          </Animated.View>
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
    position: "absolute",
    //top: 100,
    //transform: [{ translateY: -50 }],
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
    opacity: 0,
  },
  status: {
    fontWeight: "bold",
    position: "absolute",
    //transform: [{ translateY: 70 }],
    //top: 0,
    //opacity: 1,
  },
});
