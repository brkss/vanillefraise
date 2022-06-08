import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FoodItem } from "./Item";
import { NextButton } from "../NextButton";
import { useHealthLabelsQuery } from "../../../generated/graphql";
import { Loading } from "../../../components";
//import Modal from "react-native-modal";
import { ItemInfoModal } from "./ItemInfoModal";

interface Props {
  next: () => void;
}

export const ConfigureDietFood: React.FC<Props> = ({ next }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const { data, error, loading } = useHealthLabelsQuery();
  const [itemInfo, setItemInfo] = React.useState({
    title: "",
    desc: "",
  });
  const [selected, setSelected] = React.useState<string[]>([]);
  const handleSelect = (id: string) => {
    const index = selected.findIndex((x) => x === id);
    if (index === -1) {
      setSelected([...selected, id]);
    } else {
      selected.splice(index, 1);
      setSelected([...selected]);
    }
  };

  const isSelected = (id: string) => {
    const index = selected.findIndex((x) => x == id);
    if (index > -1) return true;
    return false;
  };

  const showItemInfo = (title: string, desc: string) => {
    setItemInfo({
      title: title,
      desc: desc,
    });
    setVisibleModal(true);
  };

  if (loading || error) return <Loading />;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FOOD THAT FIT ?</Text>
      <Text style={styles.subtitle}>enjoy what you’re eating</Text>
      <Text style={styles.hint}>
        select what type of food you feel like you want
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
        {data.healthLabels.map((label, key) => (
          <FoodItem
            key={key}
            pressed={() => {
              handleSelect(label.id);
            }}
            selected={isSelected(label.id)}
            txt={label.label}
            info={() => showItemInfo(label.label, label.description)}
          />
        ))}
      </ScrollView>

      <NextButton pressed={next} />
      <ItemInfoModal
        closed={() => setVisibleModal(false)}
        isVisible={visibleModal}
        title={itemInfo.title}
        description={itemInfo.desc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.7,
    textAlign: "center",
  },
  items: {
    flex: 1,
    marginBottom: 10,
  },
  hint: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 13,
    opacity: 0.7,
  },
});
