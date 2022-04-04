import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import {
  Heading,
  Slider,
  RecordForm,
  Loading,
  Alert,
  TodaysMood,
} from "../../components";
import { useRecordCategoriesQuery } from "../../generated/graphql";
import { useCreateRecordMutation } from "../../generated/graphql";
import { colors } from "../../utils/colors";

export const CreateRecord: React.FC<any> = ({ navigation }) => {
  const [alertData, SetAlertData] = React.useState({
    show: false,
    type: "success",
    text: "",
  });
  const [create] = useCreateRecordMutation();
  const [selected, SetSelected] = React.useState("");
  const [time, SetTime] = React.useState(new Date());
  const [date, SetDate] = React.useState(new Date());
  const [value, setValue] = React.useState<string>("");
  const { loading, data, error } = useRecordCategoriesQuery({
    onCompleted: (data) => {
      if (data && data.recordCategories.length > 0) {
        SetSelected(data.recordCategories[0].id);
      }
    },
  });
  styles;
  if (loading || error || !data) {
    return <Loading />;
  }

  const saveRecord = () => {
    if (!value || !date || !time || !selected) {
      return;
    }
    const data = {
      time: time,
      date: date,
      value: Number(value),
      category: Number(selected),
    };
    create({
      variables: {
        category: data.category,
        value: data.value,
        date: data.date,
        time: data.time,
      },
    })
      .then((res) => {
        if (res.data?.createRecord.status) {
          setValue("");
          SetAlertData({
            show: true,
            type: "success",
            text: "Record Created Successfuly !",
          });
        }
        console.log("Create record response : ", res);
      })
      .catch((e) => {
        console.log("Something went wrong while creating record : ", e);
      });
    console.log("data => ", data);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <Heading title={"Create Record"} />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <TodaysMood
              triggerAlert={(msg) =>
                SetAlertData({ text: msg, type: "success", show: true })
              }
            />
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#434343",
                marginVertical: 15,
                marginBottom: 20,
                opacity: 0.4,
              }}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Health Related Records
            </Text>
            <Text style={styles.subtitle}>
              Health Related Records help you track your chronic conditons meds
              intake.
            </Text>
            <Slider
              onSelect={(id) => SetSelected(id)}
              selected={selected}
              color={colors.c3}
              categories={data!.recordCategories}
            />
            {alertData.show ? (
              <Alert
                onClick={() => SetAlertData({ ...alertData, show: false })}
                type={alertData.type as any}
                txt={alertData.text}
              />
            ) : null}
            <RecordForm
              value={value}
              timeChange={(time) => SetTime(time)}
              dateChange={(date) => SetTime(date)}
              unit={
                data.recordCategories.find((x) => x.id === selected)?.unit ||
                "x"
              }
              valueChange={(value: number) => setValue(value.toString())}
              onSave={() => saveRecord()}
            />
            {/*<RecordHistorySlide />*/}
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
  subtitle: {
    fontSize: 13,
    fontWeight: "300",
    opacity: 0.8,
    marginTop: 5,
  },
});
