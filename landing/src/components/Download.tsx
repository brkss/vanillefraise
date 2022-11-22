import React from 'react';
import { Box, GridItem, Text, Grid, Center, Image } from '@chakra-ui/react';
import apple from '../assets/donwload-section/apple.svg';
import google from '../assets/donwload-section/google.svg';

export const Download : React.FC = () => {
  

  return (
    <Box h={'100vh'}>
      <Grid templateColumns={'repeat(6, 1fr)'}  >
        <GridItem colSpan={{md: 3, base: 6}}>
          <Center h={{md: '100vh', base: '50vh'}} bg={'black'}>
            <Box>
            <Image m={'auto'}  w={'50px'} src={apple} />
            <Text color={'white'} fontFamily={'AvBold'} mt={'15px'} fontWeight={'bold'}>GET VANILLE FRAISE ON APP STORE</Text>
            </Box>
          </Center>
        </GridItem>
        <GridItem colSpan={{md: 3, base: 6}}>
          <Center h={{md: '100vh', base: "50vh"}}>
            <Box textAlign={'center'} paddingTop={'20px'}>
            <Image w={'50px'} m={'auto'} src={google} />
            <Text fontFamily={'AvBold'} mt={'15px'} fontWeight={'bold'} >GET VANILLE FRAISE ON GOOGLE PLAY</Text>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>

  );


}
