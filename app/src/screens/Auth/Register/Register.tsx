import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import {
  RegisterIntro,
  RegisterInformation,
  Measurement,
  RegisterGender,
  BMIResult,
  RegisterSpecialCondition,
  RegisterOutro,
} from "../../../components";
import { LinearGradient } from "expo-linear-gradient";
import {
  IGender,
  IInformationData,
  IMeasurementData,
  ISCData,
} from "../../../utils/types/Register";

interface IUserData {
  name: string | "";
  email: string | "";
  password: string | "";
  weight: number | undefined;
  height: number | undefined;
  age: number | undefined;
  sc: string[] | [];
  gender: string | "";
  bmi: number | undefined;
}

type IRegisterData = {
  information?: IInformationData;
  gender?: IGender;
  measurement?: IMeasurementData;
  sc?: ISCData;
};

export const Register: React.FC<any> = ({ navigation }) => {
  const [data, setData] = React.useState<IUserData>({
    name: "",
    email: "",
    password: "",
    weight: undefined,
    height: undefined,
    bmi: undefined,
    gender: "",
    sc: [],
    age: undefined,
  });
  const [status, setStatus] = React.useState("INTRO");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });

  const handlePass = (d: IRegisterData) => {
    if (d.information) {
      setData({
        ...data,
        name: d.information.name,
        email: d.information.email,
        password: d.information.password,
      });
      setStatus("MEASUREMENT");
    }
    console.log("DATA saved in register screen ! +++> ", data);
  };

  if (!helviticaCondensed) {
    return <View />;
  }

  return (
    /*
    <LinearGradient
      colors={["#FFD7D7", "#F5EBE0"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
    */
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          {
            {
              INTRO: (
                <RegisterIntro
                  login={() => navigation.push("login")}
                  pass={() => setStatus("INFORMATION")}
                />
              ),
              INFORMATION: (
                <RegisterInformation
                  pass={(data: IInformationData) =>
                    handlePass({ information: data })
                  }
                />
              ),
              MEASUREMENT: (
                <Measurement
                  pass={(data: IMeasurementData) => setStatus("GENDER")}
                />
              ),
              GENDER: (
                <RegisterGender pass={(data: IGender) => setStatus("RESULT")} />
              ),
              RESULT: <BMIResult pass={() => setStatus("SC")} />,
              SC: (
                <RegisterSpecialCondition
                  other={() => navigation.push("osc")}
                  pass={(data: ISCData) => setStatus("OUTRO")}
                />
              ),
              OUTRO: <RegisterOutro pass={() => {}} />,
            }[status]
          }
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6EAE0",
    padding: 15,
    //alignItems: "center",
    //justifyContent: "space-evenly",
  },
  content: {
    flex: 1,
  },
});
