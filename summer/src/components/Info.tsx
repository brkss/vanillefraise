import React from 'react';
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export const Info : React.FC<Props> = ({onClose, isOpen, title, description}) => {

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
          size='sm'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            <Text mb={'30px'}>{description}</Text>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )

}
