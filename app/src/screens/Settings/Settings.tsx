import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Heading } from "../../components";
import { useSeedActivityCategoriesMutation } from "../../generated/graphql";
import { AuthContext } from '../../utils/auth/AuthProvider';
import * as SecureStore from 'expo-secure-store';

export const Settings: React.FC<any> = () => {
  const _ctx = React.useContext(AuthContext);
  const [seed] = useSeedActivityCategoriesMutation();

  const logout = async () => {
    _ctx.login('');
    await SecureStore.deleteItemAsync('TOKEN');
  }

  const createCategories = () => {
    seed()
      .then((res) => {
        console.log("seed result => ", res);
      })
      .catch((e) => {
        console.log("Something went wrong creating categories => ", e);
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Heading title={"Settings"} />
        <View style={styles.profile}>
          <View style={styles.profilePic} />
          <Text style={styles.name}>User Name.</Text>
          <Text style={styles.username}>@avocado</Text>
        </View>
        <View style={styles.options}>
          <Pressable style={styles.option}>
            <Text style={styles.optionText}>Personal Information </Text>
          </Pressable>
          <Pressable style={styles.option}>
            <Text style={styles.optionText}>Change Password</Text>
          </Pressable>
          <Pressable style={styles.option}>
            <Text style={styles.optionText}>About This Version</Text>
          </Pressable>
          <Pressable onPress={() => logout()} style={styles.option}>
            <Text style={styles.optionText}>Logout</Text>
          </Pressable>
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
