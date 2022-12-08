import React from 'react';
import { Box, 
  Grid, 
  GridItem, 
  Text, 
  Center, 
  Slider, 
  SliderTrack, 
  SliderFilledTrack, 
  SliderThumb,
  Heading
} from '@chakra-ui/react';
import { MdAccessTime } from 'react-icons/md'

const _data = [
  {
    min: 0,
    max: 10,
    risk_gn: 1,
    risk_pn: 1,
  },
  {
    min: 11,
    max: 15,
    risk_gn: 1,
    risk_pn: 1,
  },
  {
    min: 16,
    max: 20,
    risk_gn: 1,
    risk_pn: 1,
  },
  {
    min: 21,
    max: 25,
    risk_gn: 1,
    risk_pn: 1.4,
  },
  {
    min: 26,
    max: 30,
    risk_gn: 2,
    risk_pn: 3.2,
  },
  {
    min: 36,
    max: 40,
    risk_gn: 3,
    risk_pn: 7,
  },
  {
    min: 41,
    max: 45,
    risk_gn: 4,
    risk_pn: 9,
  },
  {
    min: 46,
    max: 50,
    risk_gn: 4,
    risk_pn: 15,
  },
  {
    min: 56,
    max: 59,
    risk_gn: 6,
    risk_pn: 19.8,
  },
  {
    min: 60,
    max: 100,
    risk_gn: 6,
    risk_pn: 22,
  },

]

export const Ageing : React.FC = () => {

  const [age, setAge] = React.useState(20);
  const [risk, setRisk] = React.useState<{p: number, g: number}>({p: 0, g: 0});

  React.useEffect(() => {
    changed(20); 
  }, []);

  const changed = (val: number) => {
    setAge(val);
    // find risk 
    for(let d of _data){
      if(age >= d.min && age <= d.max){
        setRisk({
          p: d.risk_pn,
          g: d.risk_gn
        })
      }
    }
  }

  return (
  
    <Box pos={'relative'} h={'100vh'} bg={'black'}>
      <Box pos={'absolute'} top={'5%'} w={'100%'} p={'30px'}>
        <Heading opacity={.9} textAlign={'center'} fontFamily={"'DM Serif Display', serif"} color={'white'} >Fatal Health Disease Risk</Heading>
      </Box>
      <Grid h={'100%'} templateColumns={'repeat(12, 1fr)'}>
        <GridItem h={'100%'} colSpan={6}>
          <Center h={'100%'}>
            <Box textAlign={'center'}>
              <Text fontSize={'20px'} fontFamily={"'DM Serif Display', serif"} color={'white'} >Good Nutrition</Text>
              <Text fontSize={'70px'} fontFamily={"'DM Serif Display', serif"} color={'white'} >{risk.g}%</Text>
            </Box>
          </Center>
        </GridItem>
        <GridItem h={'100%'} colSpan={6}>
          <Center h={'100%'}>
            <Box textAlign={'center'}>
              <Text fontSize={'20px'} fontFamily={"'DM Serif Display', serif"} color={'white'} >Poor Nutrition</Text>
              <Text fontSize={'70px'} fontFamily={"'DM Serif Display', serif"} color={'white'} >{risk.p}%</Text>
            </Box>
          </Center>
        </GridItem>
      </Grid>
      <Box pos={'absolute'} textAlign={'center'} bottom={'15%'} w={'100%'} >
        <Text 
          fontSize={'25px'} 
          marginBottom={'20px'} 
          textAlign={'center'} 
          fontFamily={"'DM Serif Display', serif"} 
          color={'white'}
        >
          {age >= 60 ? `more than ${age} years` : age <= 10 ?  `less than ${age} years` :  `${age} years`}
        </Text>        
        <Slider w={{md: '50%', base: "80%"}} aria-label='slider-ex-4' onChange={(val) => changed(val)} min={10} max={60} defaultValue={20}>
          <SliderTrack bg='red.100'>
            <SliderFilledTrack bg='white' />
          </SliderTrack>
          <SliderThumb boxSize={6} p={'13px 24px'}>
            <Box color='tomato' bg={'blue'} as={MdAccessTime} />
          </SliderThumb>
        </Slider>
      </Box>
    </Box>

  );
}
