// AddBookModal.tsx

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (name: string, description: string) => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onAddBook }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddBook = () => {
    // You can validate the input here if needed
    // Then, call the onAddBook function to add the book
    onAddBook(name, description);
    // Clear the input fields and close the modal
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a Book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Book Name</FormLabel>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddBook}>
            Add
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddBookModal;
