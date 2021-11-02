import React from "react";
import { Form } from "semantic-ui-react";

export default function AddMovie({ setIsAdding }) {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Movie Name</label>
          <input placeholder="Movie Name" />
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
          <input placeholder="Description" />
        </Form.Field>
      </Form>
    </div>
  );
}
