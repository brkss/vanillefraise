import React from "react";
import { View, StyleSheet, Linking, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { twitter, instagram } from '../../utils/config/defaults';

export const SocialMedia = () => {
  const handlePress = React.useCallback((url: string) => {
    if(!Linking.canOpenURL(url))
      Alert.alert('Cant open URl !');
    else
      Linking.openURL(url)
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.item, { alignItems: "flex-end" }]}>
          <Ionicons onPress={() => handlePress(twitter)} name={"logo-twitter"} size={25} />
        </View>
        <View style={[styles.item]}>
          <Ionicons onPress={() => handlePress(instagram)} name={"logo-instagram"} size={25} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    paddingHorizontal: 10,
  },
});
