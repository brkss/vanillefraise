import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FoodItem } from "./Item";
import { Navigation } from "../Navigation";
import { useHealthLabelsQuery } from "../../../generated/graphql";
import { Loading } from "../../../components/General";
//import Modal from "react-native-modal";
import { ItemInfoModal } from "./ItemInfoModal";

interface Props {
  next: () => void;
  previous: () => void;
  changed: (key: string, val: any | any[]) => void;
  preselected: string[];
  hidenavigation?: boolean;
}

export const ConfigureDietFood: React.FC<Props> = ({
  next,
  previous,
  changed,
  preselected,
  hidenavigation,
}) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const { data, error, loading } = useHealthLabelsQuery();
  const [itemInfo, setItemInfo] = React.useState({
    title: "",
    desc: "",
  });
  const [selected, setSelected] = React.useState<string[]>(preselected);

  const handleSelect = (id: string) => {
    const index = selected.findIndex((x) => x === id);
    let res = selected;
    if (index === -1) {
      res = [...selected, id];
      setSelected([...selected, id]);
    } else {
      selected.splice(index, 1);
      res = selected;
      setSelected([...selected]);
    }

    changed("filters", res);
    console.log("unselect this : \t", id);
    console.log("index : \t", index);
    console.log("selected : \t", selected);
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
      <Text style={styles.title}>Enjoy what you're eating</Text>
      <Text style={styles.subtitle}>alergies and dislikes</Text>
      <Text style={[styles.hint, { display: "none" }]}>
        setup filters for recipes, note that filters may affect your recipes
        choises !
      </Text>
      <Text style={[styles.hint]}>{selected.length} selected</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
        {data.healthLabels.map((label, key) => (
          <FoodItem
            key={key}
            pressed={() => {
              handleSelect(label.id);
            }}
            count={label.count}
            selected={isSelected(label.id)}
            txt={label.label}
            info={() => showItemInfo(label.label, label.description)}
          />
        ))}
      </ScrollView>

      {!hidenavigation && (
        <Navigation previous={previous} next={next} showNext showPrevious />
      )}
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
    fontFamily: "AvNextBold",
    //textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.7,
    lineHeight: 18,
    fontFamily: "AvNextBold",
    //textAlign: "center",
  },
  items: {
    flex: 1,
    marginBottom: 10,
  },
  hint: {
    textAlign: "right",
    //marginTop: 20,
    marginBottom: 10,
    fontSize: 13,
    opacity: 0.7,

    //display: "none",
  },
});
