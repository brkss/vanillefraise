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
//import { LinearGradient } from "expo-linear-gradient";
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
  birth: Date | undefined;
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
    birth: undefined,
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
    } else if (d.measurement) {
      setData({
        ...data,
        weight: d.measurement.weight,
        birth: d.measurement.birth,
        height: d.measurement.height,
      });
      setStatus("GENDER");
    } else if (d.gender) {
      setData({
        ...data,
        gender: d.gender.gender,
      });
      setStatus("RESULT");
    } else if(d.sc){
      setData({
        ...data,
        sc: d.sc.sc
      });
      console.log("sc data : ", d.sc.sc);
      setStatus("OUTRO");
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
                  pass={(data: IMeasurementData) =>
                    handlePass({ measurement: data })
                  }
                />
              ),
              GENDER: (
                <RegisterGender
                  pass={(data: IGender) => handlePass({ gender: data })}
                />
              ),
              RESULT: <BMIResult gender={data.gender} height={data.height} birth={data.birth} weight={data.weight} pass={() => setStatus("SC")} />,
              SC: (
                <RegisterSpecialCondition
                  other={() => navigation.push("osc")}
                  pass={(data: ISCData) => handlePass({ sc: data })}
                />
              ),
              OUTRO: <RegisterOutro pass={() => console.log("FINAL DATA", data)} />,
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
