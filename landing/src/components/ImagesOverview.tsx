import React from 'react';
import { keyframes, Box, Image, Grid, GridItem } from '@chakra-ui/react';
import s1 from '../assets/overview/s1.png';

const move = keyframes`

  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-990px, 0, 0); /* The image width */
  }
`

export const ImageOverview : React.FC = () => {

  return (
    <Box mt={'60px'} textAlign={'center'} w={'100%'}>
        <Image m={'auto'} src={s1} display={'inline-block'} w={{md: '250px', base: "200px"}}   />
    </Box>
    
  
  );
}
