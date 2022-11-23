import React from 'react';
import { Box, Grid, Text, GridItem, Image, Center } from '@chakra-ui/react';
import ss from '../assets/overview/s1-old.png';

const tmp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ShowOff : React.FC = () => {


  return (
    <Center h={'100vh'} bg={'black'}>
        <Box>
    <Text color={'white'} fontSize={'40px'} fontFamily={'AvBold'} textAlign={'center'} fontWeight={'bold'} mb={'20px'} >How Helpful ?</Text>

        <Box whiteSpace={'nowrap'} overflow={'auto'} w={'100%'} > 
        {
          tmp.map((item) => (
              <Image d={'inline-block'} mr={'30px'} w={{md: '420px', base: '300px'}} src={ss} />
          ))
        }
        </Box>
        </Box>
    </Center>
  );
}
