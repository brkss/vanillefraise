import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Heading, Slider, RecordForm } from "../../components";
import { record_category } from "../../utils";

export const CreateRecord: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading title={"Activity"} />
      </View>
      <View style={styles.contentContainer}>
        <Slider color={"#FDEBA8"} categories={record_category} />
        <RecordForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
  },
  headingContainer: {
    flex: 0.14,
  },
  contentContainer: {
    flex: 0.86,
  },
});
