import React from 'react';
import { Box, Text, Grid, GridItem, Center, HStack } from '@chakra-ui/react';



const data = [
  {
    name: "Appetite Matter",
    video: require("../assets/videos/vid-1-optimized.mp4")
  },
  {
    name: "Search & Discover",
    video: require("../assets/videos/vid-2-optimized.mp4")
  },
  {
    name: "Exlude Foods",
    video: require("../assets/videos/vid-3-optimized.mp4")
  },
  {
    name: "Track Everything",
    video: require("../assets/videos/vid-4-optimized.mp4")
  }
]

export const Ways : React.FC = () => {

  const [curr, setCurr] = React.useState(data[0])

  const handleSelect = (index: number) => {
    setCurr(data[index])
  }

  return (
    <Box pt={'20px'} bg={'black'} h={'100vh'}>
      <Grid h={'100%'} templateColumns={'repeat(12, 1fr)'}>
        <GridItem h={'100%'}  colSpan={{md: 12, base: 12}}>
          <Center   h={'100%'}>
              <Text d='none' fontWeight={'bold'} mb={'20px'} fontSize={'25px'} color={'white'}>Use Vanille Fraise</Text>
             
              <Box paddingLeft={'20px'} whiteSpace={'nowrap'} textAlign={'center'} overflow={'auto'} w={'100%'} >
                {
                  data.map((item, key) => (

                    <Text
                      opacity={item.name !== curr.name ? .6 : 1}
                      key={key}
                      onClick={() => handleSelect(key)}
                      cursor={'pointer'}
                      d={'inline-block'}
                      mr={'15px'}
                      fontWeight={'bold'}
                      fontSize={{base: '20px', md: "24px"}}
                      color={'white'}
                    >
                      {item.name}
                    </Text>
                  ))
                }
              </Box>
          </Center>
        </GridItem>
        <GridItem h={'100%'} textAlign={'center'} colSpan={{md: 12, base: 12}}>
            <Box d={'inline-block'} p={'4px'} bg={'#4a4a4a'} minH={'433px'} rounded={'27px'}>
              <video 
                src={curr.video} 
                autoPlay 
                muted 
                //playsInline
                //autoPlay={false}
                //controls={false}
                loop 
                style={{width: '200px', borderRadius: '22px'}} 
              /> 
            </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
