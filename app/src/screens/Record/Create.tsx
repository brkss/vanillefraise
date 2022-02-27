import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import {
  Heading,
  Slider,
  RecordForm,
  RecordHistorySlide,
  Loading,
  Alert,
} from "../../components";
import { record_category } from "../../utils";
import { useRecordCategoriesQuery } from "../../generated/graphql";
import { useCreateRecordMutation } from "../../generated/graphql";

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
            <Slider
              onSelect={(id) => SetSelected(id)}
              selected={selected}
              color={"#FDEBA8"}
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
});
