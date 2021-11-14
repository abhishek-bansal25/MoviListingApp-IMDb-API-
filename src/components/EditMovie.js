import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Header, Form } from "semantic-ui-react";
import MovieForm from "../common/MoviForm";
import PrimaryButton from "../common/PrimaryButton";

export default function EditMovie({ setIsAdding }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(null);
  const [actor, setActor] = useState("");
  const [producer, setProducer] = useState("");

  let { id } = useParams();
  let history = useHistory();

  const handleEditMovie = () => {
    axios
      .put(`http://localhost:5000/movie/${id}`, {
        movie: name,
        description: desc,
        actors: actor,
        producer: producer,
        releaseDate: date,
      })
      .then(() => {
        history.push("/");
      });
    // setIsAdding(false);
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
          <input
            placeholder="release year"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Actor Name</label>
          <input
            placeholder="Actor Name"
            onChange={(e) => setActor(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Producer Name</label>
          <input
            placeholder="Producer Name"
            onChange={(e) => setProducer(e.target.value)}
          />
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
        primary
        style={{ marginTop: "20px" }}
        onClick={handleEditMovie}
        type="submit"
      >
        Edit Movie
      </Button>
    </div>
  );
}
