import React from 'react';
import { Link, Box, Grid, Text, GridItem, Image, Center } from '@chakra-ui/react';
import ss from '../assets/overview/s1-old.png';

const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;

const screenshots = [
  {
    title: '"Listen To Your Appetite"',
    image: require('../assets/overview/ss-9.png')
  },
  {
    title: "Wide Overview",
    image: require('../assets/overview/ss-1.png')
  },
  {
    title: "More Details",
    image: require("../assets/overview/ss-2.png")
  },
  {
    title: "No Limits",
    image: require("../assets/overview/ss-3.png"),
  },
  {
    title: "Ready for grocery",
    image: require("../assets/overview/ss-4.png")
  },
  {
    title: "Keep Track",
    image: require("../assets/overview/ss-5.png")
  },
  {
    title: "You always have a choise",
    image: require("../assets/overview/ss-6.png")
  },
  {
    title: "Go nutrition-micro",
    image: require("../assets/overview/ss-8.png")
  },
  {
    title: "With you in the kitchen",
    image: require("../assets/overview/ss-7.png")
  },
  
]

export const ShowOff : React.FC = () => {


  return (
    <Center pos={'relative'} h={'100vh'} bg={'black'}>
      <Box pos={'absolute'} w={'30%'} h={'100%'} background={'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'} top={0} left={'70%'}  />
        <Box w={'100%'}>
    <Text color={'white'} fontSize={{md: '35px', base: '25px'}} fontFamily={'AvBold'} pl={'45px'} textAlign={'left'} fontWeight={'bold'} mb={'40px'} >Discover Vanille Fraise</Text>

        <Box className='imageslider' paddingLeft={'40px'} whiteSpace={'nowrap'} overflow={'auto'} w={'100%'} > 
        {
          screenshots.map((item, key) => (
            <Box  w={{md: '270px'}} mr={{base: '30px'}} d={'inline-block'} textAlign={'center'} key={key}>
              <Text mb={'10px'} color={'white'} fontFamily={'AvBold'} fontSize={{md: "18px"}} textAlign={'center'} fontWeight={'bold'}>{item.title}</Text>
              <Image  opacity={1} key={key} d={'inline-block'} w={{md: '250px', base: '200px'}} src={item.image} />
            </Box>
          ))
        }
        </Box>
        </Box>
    </Center>
  );
}
