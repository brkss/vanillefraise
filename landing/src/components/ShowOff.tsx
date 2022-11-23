import React from 'react';
import { Link, Box, Grid, Text, GridItem, Image, Center } from '@chakra-ui/react';
import ss from '../assets/overview/s1-old.png';

const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9] ;

const screenshots = [
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
    title: "With you in the kitchen",
    image: require("../assets/overview/ss-7.png")
  }
]

export const ShowOff : React.FC = () => {


  return (
    <Center h={'100vh'} bg={'black'}>
        <Box w={'100%'}>
    <Text d={'none'} color={'white'} fontSize={'40px'} fontFamily={'AvBold'} textAlign={'center'} fontWeight={'bold'} mb={'20px'} >How Helpful ?</Text>

        <Box className='imageslider' paddingLeft={'40px'} whiteSpace={'nowrap'} overflow={'auto'} w={'100%'} > 
        {
          screenshots.map((item, key) => (
            <Box  w={{md: '350px'}} mr={{base: '30px'}} d={'inline-block'} textAlign={'center'} key={key}>
              <Text mb={'10px'} color={'white'} fontFamily={'AvBold'} fontSize={{md: "25px"}} textAlign={'center'} fontWeight={'bold'}>{item.title}</Text>
              <Image  key={key} d={'inline-block'} w={{md: '250px', base: '200px'}} src={item.image} />
            </Box>
          ))
        }
        </Box>
        </Box>
    </Center>
  );
}
