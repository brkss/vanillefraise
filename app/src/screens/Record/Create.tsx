import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import {
  Heading,
  Slider,
  RecordForm,
  RecordHistorySlide,
} from "../../components";
import { record_category } from "../../utils";

export const CreateRecord: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Create Record"} />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <Slider color={"#FDEBA8"} categories={record_category} />
            <RecordForm />
            <RecordHistorySlide />
            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
      </SafeAreaView>
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
    //flex: 0.14,
  },
  contentContainer: {
    //flex: 0.86,
  },
});
