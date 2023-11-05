import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Grid } from "@chakra-ui/react";

const Home = () => {
  const books = [
    {
      id: 1,
      name: "Sample Book 1",
      description: "This is a sample book description.",
    },
    {
      id: 2,
      name: "Sample Book 2",
      description: "Another sample book description.",
    },
    {
      id: 3,
      name: "Sample Book 2",
      description: "Another sample book description.",
    },
    {
      id: 4,
      name: "Sample Book 2",
      description: "Another sample book description.",
    },
    // Add more books as needed
  ];

  const onEdit = () => {
    // Implement your edit logic here
  };

  const onDelete = () => {
    // Implement your delete logic here
  };

  return (
    <div>
      <Navbar />
      <Grid templateColumns="repeat(2, 1fr)" gap="4">
        {books.map((book) => (
          <Card key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
