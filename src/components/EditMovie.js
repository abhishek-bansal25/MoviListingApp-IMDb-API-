import axios from "axios";
import React,{useState} from "react";
import { Button, Header, Form } from "semantic-ui-react";
import MovieForm from "../common/MoviForm";
import PrimaryButton from "../common/PrimaryButton";

export default function EditMovie({ setIsAdding }) {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleEditMovie = () => {
    axios.put(`http://localhost:3000/streams`)
    setIsAdding(false);
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <Header as="h2">Edit Movie</Header>
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
      <Button
        style={{ marginTop: "20px" }}
        onClick={handleEditMovie}
        type="submit"
      >
        Add Movie
      </Button>
    </div>
  );
}
