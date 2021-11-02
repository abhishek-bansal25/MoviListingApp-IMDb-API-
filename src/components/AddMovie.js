import React from "react";
import { Button, Header } from "semantic-ui-react";
import MovieForm from "../common/MoviForm";
export default function AddMovie({ setIsAdding }) {
  const handleClick = () => {
    setIsAdding(false);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <Header as="h2">Add Movie</Header>

      <MovieForm />
      <Button style={{ marginTop: "20px" }} onClick={handleClick} type="submit">
        Add Movie
      </Button>
    </div>
  );
}
