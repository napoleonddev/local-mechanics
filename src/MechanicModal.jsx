import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from '@chakra-ui/react';

function MechanicModal({ mechanic, onClose }) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{mechanic.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Expertise: {mechanic.expertise}</Text>
          <Text mt={3}>Rating: {mechanic.rating}</Text>
        </ModalBody>

        <ModalFooter display={'flex'}>
          <Button bg="primary" mr={3} onClick={onClose}>
            Leave a review
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MechanicModal;
