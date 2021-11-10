import axios from "axios";
import React, { useState } from "react";
import { Button, Header, Form } from "semantic-ui-react";
import MovieForm from "../common/MoviForm";

export default function AddMovie({ setIsAdding, getList }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddMovie = () => {
    axios
      .post("http://localhost:3000/streams", {
        movie: name,
        description: desc,
      })
      .then(() => {
        setIsAdding(false);
        getList();
      });
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <Header as="h2">Add Movie</Header>
      <Form>
        <Form.Field>
          <label>Movie Name</label>
          <input
            placeholder="Movie Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Release year</label>
          <input placeholder="release year" />
        </Form.Field>
        <Form.Field>
          <label>Actor Name</label>
          <input placeholder="Actor Name" />
        </Form.Field>
        <Form.Field>
          <label>Producer Name</label>
          <input placeholder="Producer Name" />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Field>
      </Form>
      <Button style={{ marginTop: "20px" }} onClick={handleAddMovie} type="submit">
        Add Movie
      </Button>
    </div>
  );
}
