import React from "react";
import { Box, Text, Grid, GridItem, Center } from "@chakra-ui/react";
import { Instruction } from "./Instruction";
import Sparkles from "./Sparkles";
import { SunHoursSlider } from "./SunHoursSlider";
import { weather, uvi } from "../utils/weather";
import { getSPF } from "../utils/spf";
import { getUVProtection, getUVBadge } from "../utils/uv";

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
}

export const Results: React.FC<Props> = ({ data: d }) => {
  const [data, setData] = React.useState<IData>(d);
  const [loading, setLoading] = React.useState(true);

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
      console.log("weather : ", w);
      console.log("uvi : ", uv);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Text> ✨ Doing the magic ...</Text>;
  <SunHoursSlider changed={(hours) => setData({ ...data, hours: hours })} />;
  return (
    <Box p={"10px"}>
      <Text textAlign={"center"} fontSize={"50px"}>
        <Sparkles>🌞 🍃</Sparkles>
      </Text>
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
      <Text fontSize={"17px"} opacity={0.8} mb={"20px"}>
        {data.date.toDateString()}
      </Text>
      <Box>
        <Text fontSize={"25px"} fontWeight={"bold"}>
          🌞 UV index{" "}
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
        <Text fontSize={"35px"} fontWeight={"bold"} mt={"-16px"}>
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
          <Text fontSize={"20px"} fontWeight={"bold"}>
            <Sparkles> 🧴 Sunscreen's SPF </Sparkles>
          </Text>
          <Text fontSize={"30px"} mt={"-4px"} fontWeight={"bold"}>
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
        <Text>
          According to today’s UV follow these instructions for good skin
          protection
        </Text>
      </Box>
      <Box mt={"10px"}>
        {getUVProtection(data.uv).map((p, key) => (
          <Instruction priority={"Required"} txt={p} key={key} />
        ))}
      </Box>
    </Box>
  );
};
