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
  Close,
} from "../../../components";
//import { LinearGradient } from "expo-linear-gradient";
import {
  IGender,
  IInformationData,
  IMeasurementData,
  ISCData,
} from "../../../utils/types/Register";
import { calcBMR, getAge } from "../../../utils/modules/bmr";
import { useRegisterMutation } from "../../../generated/graphql";
import { AuthContext } from "../../../utils/auth/AuthProvider";
import { setAccessToken } from "../../../utils/token/token";
import * as SecureStore from "expo-secure-store";
import { calculateREE, calculateTDEE } from "../../../utils/modules/macros";

interface IUserData {
  username: string | "";
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
  const _ctx = React.useContext(AuthContext);
  const [data, setData] = React.useState<IUserData>({
    username: "",
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
  const [status, setStatus] = React.useState("INFORMATION");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../../assets/helvitica-condensed.otf"),
  });
  const [register] = useRegisterMutation();

  const handlePass = (d: IRegisterData) => {
    if (d.information) {
      setData({
        ...data,
        username: d.information.username,
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
        bmi: calculateREE(
          d.gender.gender,
          data.weight,
          data.height,
          getAge(data.birth)
        ),
      });
      setStatus("OUTRO");
    } else if (d.sc) {
      setData({
        ...data,
        sc: d.sc.sc,
      });
      console.log("sc data : ", d.sc.sc);
      setStatus("OUTRO");
    }
    console.log("DATA saved in register screen ! +++> ", data);
  };

  const closeRegister = () => {
    navigation.push("intro");
  };
  const handleRegister = () => {
    register({
      variables: {
        sc: [],
        //sc: data.sc,
        gender: data.gender,
        height: Number(data.height),
        weight: Number(data.weight),
        birth: data.birth,
        bmi: Number(data.bmi),
        password: data.password,
        email: data.email,
        name: data.name,
        username: data.username,
      },
    })
      .then(async (res) => {
        if (res.data.register.status) {
          // registered successfuly !
          const _token = res.data.register.token;
          const _refreshToken = res.data.register.rToken;
          await SecureStore.setItemAsync("TOKEN", _refreshToken);
          setAccessToken(_token);
          _ctx.login(_token);
          console.log(
            "refresh token : ",
            await SecureStore.getItemAsync("TOKEN")
          );
        } else {
          navigation.push("intro");
        }
        console.log("register response => ", res);
      })
      .catch((e) => {
        setStatus("INFORMATION");
        console.log("Sonething went wrong while trying to register => ", e);
      });
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
      <SafeAreaView style={{ flex: 1, paddingTop: 10 }}>
        {/*
		<Close
          isRegister={true}
          pressed={() => {
            closeRegister();
          }}
        />*/}
        <View style={styles.content}>
          {
            {
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
              RESULT: (
                <BMIResult bmr={data.bmi} pass={() => setStatus("OUTRO")} />
              ),
              SC: (
                <RegisterSpecialCondition
                  other={() => navigation.push("osc")}
                  pass={(data: ISCData) => handlePass({ sc: data })}
                />
              ),
              OUTRO: <RegisterOutro pass={() => handleRegister()} />,
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
    backgroundColor: "#f8f8ff",
    padding: 15,
    //alignItems: "center",
    //justifyContent: "space-evenly",
  },
  content: {
    flex: 1,
  },
});
