import React from "react";
import { ScrollView, View, StyleSheet, Text, Dimensions } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export const Intro: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          bounces={false}
          snapToOffsets={[0, width]}
          horizontal
          style={{ backgroundColor: "red" }}
          decelerationRate="fast"
        >
          <View style={styles.view}>
            <Text>View 1</Text>
          </View>
          <View style={styles.view}>
            <Text>View 2</Text>
          </View>
        </ScrollView>
      </View>
    </View>
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
});
