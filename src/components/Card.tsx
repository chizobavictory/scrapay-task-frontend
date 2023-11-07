import React, { useState } from "react";
import { Text, Button, Flex, Grid } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import DeleteBookModal from "./DeleteBookModal";
import EditBookModal from "./EditBookModal";
import { useAuth0 } from "@auth0/auth0-react";

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
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const { isAuthenticated } = useAuth0();



  if (!isAuthenticated) {
    return (
      <Text>
        Please log in to view the bookstore.
      </Text>
    );
  }

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  return (
    <Grid templateColumns="1fr" gap="2" borderWidth="1px" borderRadius="lg" overflow="hidden" p="2">
      <Text fontSize="xl" fontWeight="bold" mb="2">
        {book.name}
      </Text>
      <Text>{book.description}</Text>
      <Flex mt="2">
        <Button onClick={handleEditClick} marginRight="2">
          <EditIcon />
        </Button>
        <Button onClick={handleDeleteClick}>
          <DeleteIcon />
        </Button>
      </Flex>

      {isEditModalOpen && (
        <EditBookModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          book={book}
          onEdit={onEdit}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteBookModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={onDelete}
        />
      )}
    </Grid>
  );
};

export default Card;
