import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { Instruction } from "./Instruction";
import Sparkles from "./Sparkles";
import { SunHoursSlider } from "./SunHoursSlider";
import { weather, uvi } from "../utils/weather";
import { getSPF } from "../utils/spf";
import { getUVProtection, getUVBadge } from "../utils/uv";
import { AiFillInfoCircle } from "react-icons/ai";
import { Info } from "./Info";
import { descriptions } from "../utils/data/descriptions";
import { save } from "../utils/storage";
import { GrPowerReset } from "react-icons/gr";
import { Pub } from "./Pub";

interface IData {
  city: string;
  temperature: string;
  skinId: number;
  coords: { lat: string; lon: string };
  uv: number;
  hours: number;
  date: Date;
}

interface Props {
  data: IData;
  reset: () => void;
}

export const Results: React.FC<Props> = ({ data: d, reset }) => {
  const [data, setData] = React.useState<IData>(d);
  const [loading, setLoading] = React.useState(true);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [infoData, setInfoData] = React.useState({
    title: "",
    description: "",
  });

  React.useEffect(() => {
    (async () => {
      const w = await weather(data.coords.lat, data.coords.lon);
      const uv = await uvi(data.coords.lat, data.coords.lon);
      setData({
        ...data,
        temperature: w.main.feels_like.toString(),
        city: w.name,
        uv: uv.value,
      });
      save({ skinId: data.skinId, locationPermision: true });
      console.log("weather : ", w);
      console.log("uvi : ", uv);
      setLoading(false);
    })();
  }, []);

  const handleShowInfo = (title: string, description: string) => {
    setInfoData({
      title: title,
      description: description,
    });
    onOpen();
  };

  if (loading) return <Text> ✨ Doing the magic ...</Text>;
  return (
    <Box p={"10px"}>
      <Text mb={"20px"} textAlign={"center"} fontSize={"50px"}>
        <Sparkles>🌞 🍃</Sparkles>
      </Text>
      <Pub />
      <Box cursor={"pointer"} onClick={reset} mb={"15px"}>
        <GrPowerReset
          style={{
            display: "inline",
            cursor: "pointer",
            float: "left",
            marginTop: "5px",
          }}
        />
        <Text display={"inline"} ml={"5px"} fontWeight={"bold"}>
          Reset
        </Text>
      </Box>
      <Box>
        <Text fontSize={"25px"} fontWeight={"bold"} display={"inline"}>
          <Sparkles>📍 {data.city}</Sparkles>
        </Text>
        <Text
          fontSize={"25px"}
          fontWeight={"bold"}
          display={"inline"}
          float={"right"}
        >
          <Sparkles>🌡 {data.temperature} °C</Sparkles>
        </Text>
      </Box>
      <Text fontSize={"13px"} opacity={0.8} mb={"20px"}>
        {data.date.toDateString()}
      </Text>
      <Box>
        <Text
          onClick={() => handleShowInfo("UV index", descriptions.UV)}
          fontSize={{ md: "25px", base: "18px" }}
          fontWeight={"bold"}
        >
          🌞 UV index{" "}
          <AiFillInfoCircle
            display={"inline"}
            style={{ display: "inline" }}
            size={"14px"}
          />
          <Text
            float={"right"}
            bg={getUVBadge(data.uv).color}
            rounded={"4px"}
            p={"2px 10px"}
            mt={"9px"}
            fontSize={"12px"}
            display={"inline"}
          >
            UV is {getUVBadge(data.uv).label}
          </Text>
        </Text>
        <Text
          fontSize={"35px"}
          fontWeight={"bold"}
          mt={{ md: "-16px", base: "-8px" }}
        >
          {data.uv}
        </Text>
      </Box>
      <hr
        style={{
          borderStyle: "dashed",
          borderTopColor: "#00000030",
          marginBottom: "20px",
        }}
      />
      <SunHoursSlider changed={(hours) => setData({ ...data, hours: hours })} />
      <Grid templateColumns={"repeat(12, 1fr)"}>
        <GridItem colSpan={6}>
          <Text
            fontSize={{ md: "20px", base: "15px" }}
            fontWeight={"bold"}
            onClick={() => handleShowInfo("SPF", descriptions.SPF)}
          >
            <Sparkles>
              {" "}
              🧴 Sunscreen's SPF{" "}
              <AiFillInfoCircle
                display={"inline"}
                style={{ display: "inline" }}
                size={"14px"}
              />{" "}
            </Sparkles>
          </Text>
          <Text
            fontSize={{ md: "30px", base: "25px" }}
            mt={"-4px"}
            fontWeight={"bold"}
          >
            {getSPF(data.skinId, data.hours as any)} SPF
          </Text>
        </GridItem>
        <GridItem p={"5px"} colSpan={6}>
          <Center rounded={"14px"} bg={"#FFD6AE"} h={"100%"}>
            <Text fontWeight={"bold"}>🔗 examples</Text>
          </Center>
        </GridItem>
      </Grid>
      <hr
        style={{
          borderStyle: "dashed",
          borderTopColor: "#00000030",
          margin: "20px 0",
        }}
      />
      <Box>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          <Sparkles>Protection ⛱</Sparkles>
        </Text>
        <Text fontSize={"13px"}>
          According to today’s UV follow these instructions for good skin
          protection
        </Text>
      </Box>
      <Box mt={"10px"} mb={"40px"}>
        {getUVProtection(data.uv).map((p, key) => (
          <Instruction priority={"Required"} txt={p} key={key} />
        ))}
      </Box>
      <Info
        description={infoData.description}
        isOpen={isOpen}
        onClose={onClose}
        title={infoData.title}
      />
    </Box>
  );
};
