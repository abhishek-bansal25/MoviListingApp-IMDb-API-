import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { List } from "semantic-ui-react";

export default function Movie() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    axios.get(`http://localhost:5000/streams/${id}`).then((res) => {
      console.log(res,"movie data");
      setMovie(res.data);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie, "movie arr");
  return (
    <div style={{ paddingTop: "20px" }}>
      <List>
        <List.Item>
          <List.Header>
            <h2>{movie.movie}</h2>
          </List.Header>
          <List.Header>Release year</List.Header>
          {movie.releaseDate}
          <List.Header>{movie.description}</List.Header>
          <List.Header>Actors</List.Header>
          {movie.actors}
          <List.Header>Producer</List.Header>
          {movie.producer}
        </List.Item>
      </List>
    </div>
  );
}
