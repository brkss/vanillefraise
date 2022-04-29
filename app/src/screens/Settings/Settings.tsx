import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Heading, Loading, SocialMedia } from "../../components";
import { AuthContext } from "../../utils/auth/AuthProvider";
import * as SecureStore from "expo-secure-store";
import { useMeQuery } from "../../generated/graphql";
import  Constants  from "expo-constants";


export const Settings: React.FC<any> = ({ navigation }) => {
  const { data, loading, error } = useMeQuery();
  const _ctx = React.useContext(AuthContext);

  const logout = async () => {
    _ctx.logout();
    _ctx.login("");
    await SecureStore.deleteItemAsync("TOKEN");
  };

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Heading title={"Settings"} />
        <View style={styles.profile}>
          <View style={styles.profilePic} />
          <Text style={styles.name}> {data.me.name} </Text>
          <Text style={styles.username}>@{data.me.username}</Text>
        </View>
        <View style={styles.options}>
          <Pressable
            style={styles.option}
            onPress={() => navigation.push("PersonalInformation")}
          >
            <Text style={styles.optionText}>Personal Information </Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={() => navigation.push("PasswordSettings")}
          >
            <Text style={styles.optionText}>Change Password</Text>
          </Pressable>
          <Pressable style={styles.option}>
            <Text style={styles.optionText}>About This Version</Text>
          </Pressable>
          <Pressable onPress={async () => await logout()} style={styles.option}>
            <Text style={styles.optionText}>Logout</Text>
          </Pressable>
          <SocialMedia />
          <Text style={{ textAlign: "center", marginTop: 10, fontWeight: 'bold' }}>V { Constants.manifest.version }</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  profile: {
    alignItems: "center",
    marginTop: 20,
  },
  profilePic: {
    height: 135,
    width: 135,
    backgroundColor: "#B9C7FD",
    borderRadius: 135,
  },
  name: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  username: {
    marginTop: 5,
    fontSize: 17,
    opacity: 0.7,
    fontWeight: "bold",
  },
  options: {
    marginTop: 20,
  },
  option: {
    //borderWidth: 1,
    padding: 20,
    borderRadius: 13,
    backgroundColor: "#E5E2E2",
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
