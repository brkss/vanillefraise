import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ListItem } from './ListItem';

export const RecipeList : React.FC = () => {


  return(
    <Box minH={'100vh'} p={'20px'}>
      <Heading>Recipes</Heading>
      <Box>
        <ListItem />
      </Box>
    </Box>
  );
} 
