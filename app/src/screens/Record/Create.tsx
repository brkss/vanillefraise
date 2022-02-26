import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import {
  Heading,
  Slider,
  RecordForm,
  RecordHistorySlide,
  Loading,
} from "../../components";
import { record_category } from "../../utils";
import { useRecordCategoriesQuery } from "../../generated/graphql";

export const CreateRecord: React.FC<any> = ({ navigation }) => {
  const [selected, SetSelected] = React.useState("");
  const [time, SetTime] = React.useState(new Date());
  const [date, SetDate] = React.useState(new  Date());
  const [value, setValue] = React.useState<number | Date>();
  const { loading, data, error } = useRecordCategoriesQuery({
    onCompleted: (data) => {
      if (data && data.recordCategories.length > 0) {
        SetSelected(data.recordCategories[0].id);
      }
    },
  });

  if (loading || error || !data) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Create Record"} />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <Slider
              onSelect={(id) => SetSelected(id)}
              selected={selected}
              color={"#FDEBA8"}
              categories={data!.recordCategories}
            />
            <RecordForm
              timeChange={(time) => SetTime(time)}
              dateChange={(date) => SetTime(date)}
              unit={
                data.recordCategories.find((x) => x.id === selected)?.unit ||
                "x"
              }
              valueChange={(value: number) => setValue(value)}
            />
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
