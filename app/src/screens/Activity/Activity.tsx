import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Slider, Heading, ActivityThumbnail, Loading } from "../../components";
import { activity_categories } from "../../utils/data";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useRecordCategoriesQuery,
  useRecordsQuery,
} from "../../generated/graphql";

export const Activity: React.FC<any> = ({ navigation }) => {
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
      category: Number(data.recordCategories[0].id),
    },
  });

  const handleSelect = (id: string) => {
    setSelected(id);
    _records.refetch({ category: Number(id) });
  };

  if (
    loading ||
    error ||
    !data 
  ) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headingContainer}>
          <Heading title={"Activity"} />
        </View>
        <View style={{ height: 140 }}>
          <Slider
            selected={selected}
            onSelect={(sel) => handleSelect(sel)}
            color={"#D9EFB8"}
            categories={[
              { id: "sports", name: "Sports", icon: "🏃‍♀️" },
              ...data.recordCategories,
            ]}
          />
        </View>
        <View style={styles.actions}>
          <Pressable
            onPress={() => navigation.push("NewActivity")}
            style={styles.create}
          >
            <Ionicons name={"ios-add-circle-outline"} size={24} />
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.createTxt}>Create New Activity</Text>
            </View>
          </Pressable>
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
  },
  createTxt: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
