import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  StartDietConfiguration,
  ConfigureDietMacros,
  ConfigureDietFood,
  ConfigureMealSchedule,
  //DietAnalyse,
  FinishDietConfig,
  Loading,
  DietSettingsTopBar,
} from "../../components";
import { activity_factors } from "../../utils/data/activityFactors";
import {
  useMeQuery,
  useGetDietConfigQuery,
  useConfigDietMutation,
  GetDietConfigQuery,
  GetDietConfigDocument,
  ActiveFoodFiltersQuery,
  ActiveFoodFiltersDocument,
  MacrosQuery,
  MacrosDocument,
} from "../../generated/graphql";
import { getMealsSchedule, saveMealsSchedule } from "../../utils/modules/meals";
import { SafeAreaView } from "react-native-safe-area-context";

const steps = ["START", "MACROS", "FOOD", "SCHEDULE", "FINISH"];

// TODO : make fetchPolicy depend on cache first by updating get config query  !
// TODO : handle errors !

export const DietConfiguration: React.FC<any> = ({ navigation }) => {
  const [config] = useConfigDietMutation();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const _config = useGetDietConfigQuery({
    fetchPolicy: "network-only",
    onCompleted: (res) => {
      if (res.getDietConfig.status === true) {
        console.log("avocado selected filters : ", res.getDietConfig.filters);
        setData({
          ...data,
          factor: res.getDietConfig.config.activityFactor,
          fat: res.getDietConfig.config.fat,
          carbs: res.getDietConfig.config.carbs,
          protein: res.getDietConfig.config.protein,
          filters: res.getDietConfig.filters,
        });
      }
    },
  });
  const _me = useMeQuery({
    onCompleted: async (res) => {
      const meals = await getMealsSchedule();
      setData({
        ...data,
        weight: _me.data.me.weight,
        height: _me.data.me.height,
        meals: meals,
      });
    },
  });
  const [step, setStep] = React.useState("START");
  const [data, setData] = React.useState({
    weight: 0,
    height: 0,
    factor: activity_factors[0].factor,
    fat: 0,
    carbs: 0,
    protein: 0,
    filters: [],
    meals: [],
    reminder: true,
  });

  const changed = (key: string, val: any | any[]) => {
    setData({
      ...data,
      [key]: val,
    });
  };

  React.useEffect(() => {}, []);

  const forward = () => {
    console.log("data ++++>>>> ", data);
    const index = steps.findIndex((x) => x === step);
    if (index > -1 && index + 1 < steps.length) {
      setStep(steps[index + 1]);
    }
  };

  const backward = () => {
    const index = steps.findIndex((x) => x === step);
    if (index > -1 && index - 1 >= 0) {
      setStep(steps[index - 1]);
    }
  };

  const save = async () => {
    setLoading(true);
    await saveMealsSchedule(data.meals);
    config({
      variables: {
        height: data.height,
        weight: data.weight,
        factor: data.factor,
        filters: data.filters,
        protein: data.protein,
        carbs: data.carbs,
        fat: data.fat,
      },
      update: (store, { data }) => {
        if (!data || data.configDiet.status === false) return;
        if (data.configDiet.data.status === false) return;
        console.log("UPDATE THAT SHIT !", data.configDiet.data);
        const macros = store.readQuery<MacrosQuery>({
          query: MacrosDocument,
        }).macros;
        store.writeQuery<MacrosQuery>({
          query: MacrosDocument,
          data: {
            macros: {
              ...macros,
              ree: data.configDiet.macros.ree,
              tdee: data.configDiet.macros.tdee,
            },
          },
        });
        store.writeQuery<ActiveFoodFiltersQuery>({
          query: ActiveFoodFiltersDocument,
          data: {
            activeFoodFilters: [...data.configDiet.data.filters],
          },
        });
        store.writeQuery<GetDietConfigQuery>({
          query: GetDietConfigDocument,
          data: {
            getDietConfig: Object.assign({}, data.configDiet).data,
          },
        });
      },
    }).then((res) => {
      setLoading(false);
      if (res.errors) {
        setError("Something went wrong coonfiguring diet !");
        return;
      }
      if (res.data.configDiet.status === false) {
        setError(
          res.data.configDiet.message ||
            "Something went wrong configuring diet !"
        );
      } else if (res.data.configDiet.status === true) {
        navigation.goBack();
      }
    });
  };

  if (_me.loading || _me.error || _config.loading || _config.error || loading)
    return <Loading />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {_config.data.getDietConfig.status ? (
          <DietSettingsTopBar selected={step} onSelect={(s) => setStep(s)} />
        ) : null}
        {
          {
            START: <StartDietConfiguration next={forward} />,
            MACROS: (
              <ConfigureDietMacros
                height={data.height}
                weight={data.weight}
                birth={_me.data.me.birth}
                gender={_me.data.me.gender}
                factorval={data.factor}
                changed={(key: string, val: any | any[]) => changed(key, val)}
                previous={backward}
                next={forward}
              />
            ),
            FOOD: (
              <ConfigureDietFood
                preselected={data.filters.map((filter) => filter.id)}
                changed={(key, val) => changed(key, val)}
                previous={backward}
                next={forward}
              />
            ),
            SCHEDULE: (
              <ConfigureMealSchedule
                meals={data.meals}
                changed={(k, v) => changed(k, v)}
                previous={backward}
                next={forward}
              />
            ),
            //ANALYSE: <DietAnalyse previous={backward} />,
            FINISH: <FinishDietConfig finish={() => save()} back={backward} />,
          }[step]
        }
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    padding: 10,
    flex: 1,
  },
});
