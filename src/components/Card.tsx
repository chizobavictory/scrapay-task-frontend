import React from "react";
import { Box, Text, Button, Flex, IconButton, Grid } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

interface CardProps {
  book: {
    id: number;
    name: string;
    description: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ book, onEdit, onDelete }) => {
  return (
    <Grid templateColumns="1fr" gap="2" borderWidth="1px" borderRadius="lg" overflow="hidden" p="2">
      <Text fontSize="xl" fontWeight="bold" mb="2">
        {book.name}
      </Text>
      <Text>{book.description}</Text>
      <Flex mt="2">
        <Button onClick={onEdit}>
          <EditIcon />
        </Button>
        <Button onClick={onDelete}>
          <DeleteIcon />
        </Button>
      </Flex>
    </Grid>
  );
};

export default Card;
