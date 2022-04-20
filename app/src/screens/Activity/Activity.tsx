import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import {
  Alert,
  TodaysMood,
  Heading,
  Loading,
  MoodStats,
  ActivityRecords,
} from "../../components";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useRecordCategoriesQuery,
  useRecordsQuery,
} from "../../generated/graphql";

export const Activity: React.FC<any> = ({ navigation }) => {
  const [alertData, SetAlertData] = React.useState({
    show: false,
    type: "success",
    text: "",
  });

  const [selected, setSelected] = React.useState("");
  const { data, loading, error } = useRecordCategoriesQuery({
    onCompleted: (res) => {
      if (res.recordCategories.length > 0) {
        setSelected(res.recordCategories[0].id);
      }
    },
  });
  const _records = useRecordsQuery({
    variables: {
      category: Number(selected),
    },
  });

  const handleSelect = (id: string) => {
    setSelected(id);
    _records.refetch({ category: Number(id) });
  };

  if (loading || error || !data) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headingContainer}>
          <Heading title={"Activities"} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.actions}>
            <Pressable
              onPress={() => navigation.push("NewActivity")}
              style={styles.create}
            >
              <Ionicons name={"ios-add-circle-outline"} size={24} />
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.createTxt}>NEW PHYSICAL EXERCISE </Text>
              </View>
            </Pressable>
          </View>
          <ActivityRecords />
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#434343",
              marginVertical: 15,
              marginBottom: 20,
              opacity: 0.4,
            }}
          />
          {alertData.show ? (
            <Alert
              onClick={() => SetAlertData({ ...alertData, show: false })}
              type={alertData.type as any}
              txt={alertData.text}
            />
          ) : null}
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
          <View>
            <Text style={styles.subtitle}>About your mood</Text>
            <Text> According to your records </Text>
            <View style={{ marginBottom: 30 }}>
              <MoodStats refreshing={false} />
            </View>
          </View>
          {/*
        <View style={{ height: 140 }}>
          <Slider
            selected={selected}
            onSelect={(sel) => handleSelect(sel)}
            color={colors.c3}
            categories={data.recordCategories}
          />
        </View>

        <View style={styles.recipesContainer}>
          {_records.loading || _records.error ? (
            <Loading />
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {selected != "sports" ? (
                _records.data.records.records?.map((rec, key) => (
                  <ActivityThumbnail
                    unit={rec.category.unit}
                    value={rec.value}
                    feedback={"You know better !"}
                    time={rec.time}
                    key={key}
                  />
                ))
              ) : (
                <Text>Sports !</Text>
              )}
              <View style={{ height: 150 }} />
            </ScrollView>
          )}
          </View>
          */}
        </ScrollView>
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
  recipesContainer: {
    //flex: 0.86,
    flex: 1,
  },
  actions: {
    marginVertical: 15,
  },
  create: {
    flexDirection: "row",
    flexWrap: "nowrap",
    opacity: 0.7,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#E6E3E3",
    borderWidth: 1,
  },
  createTxt: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
