import React from 'react';
import { Box, Center, Input, Button } from '@chakra-ui/react';

export const ResetPassword : React.FC = () => {

  
  return (
    
    <Center h={'100vh'}>
      <Box minW={'400px'}>
        <Input
                _focus={{ outline: "none" }}
                fontWeight={"bold"}
                onChange={(e) => handleForm(e.currentTarget.value)}
                size={"lg"}
                type={"email"}
                variant={"filled"}
                placeholder={"email"}
                disabled={loading}
              />
        <Input variant={'filled'} + />
      </Box>
    </Center>

  );
}
