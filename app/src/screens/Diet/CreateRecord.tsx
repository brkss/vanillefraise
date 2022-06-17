import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import {
  Button,
  Close,
  DietRecordTypes,
  InvisibleInput,
} from "../../components";
import { diet_record_types } from "../../utils/data/dietrecordstypes.data";
import {
  TrackWeightDocument,
  TrackWeightQuery,
  useCreateDietRecordMutation,
} from "../../generated/graphql";

export const CreateDietRecord: React.FC<any> = ({ navigation }) => {
  const [type, setType] = React.useState<number>(0);
  const [record] = useCreateDietRecordMutation();

  const [value, setValue] = React.useState(0);
  const handleVal = (val: string) => {
    const parsed = parseInt(val);
    if (parsed === NaN || !parsed) return;
    setValue(parsed);
  };

  const handleCreation = () => {
    /// trigger error !
    if (!value) return;
    record({
      variables: {
        type: diet_record_types[type].id,
        value: value,
        unit: diet_record_types[type].unit,
      },
      update: (store, { data }) => {
        if (data.createDietRecord.status === false) return;
        if (diet_record_types[type].id === "WEIGHT") {
          const weights = store.readQuery<TrackWeightQuery>({
            query: TrackWeightDocument,
          }).trackWeight;
          store.writeQuery<TrackWeightQuery>({
            query: TrackWeightDocument,
            data: {
              trackWeight: [...weights, value],
            },
          });
        }
      },
    }).then((res) => {
      if (res.data.createDietRecord.status === true) {
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.incuber}>
        <SafeAreaView>
          <Text style={styles.title}>CREATE RECORD</Text>
          <Close isMealOption pressed={() => navigation.goBack()} />
          <View style={{ height: 30 }} />
          <View style={{ marginVertical: 10 }}>
            <DietRecordTypes
              onselect={(i) => {
                setType(i);
                setValue(0);
              }}
              selected={type}
            />
          </View>
          <View
            style={{
              paddingTop: 30,
              height: "100%",
            }}
          >
            <View style={{ height: 30 }} />
            <InvisibleInput
              label={diet_record_types[type].name}
              value={value.toString()}
              txtChange={(v) => handleVal(v)}
              unit={diet_record_types[type].unit}
            />
            <View style={{ height: 40 }} />
            <Button txt={"SAVE"} clicked={() => handleCreation()} />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  incuber: {
    height: "70%",
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    //backgroundColor: "#D8D8D8",
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
