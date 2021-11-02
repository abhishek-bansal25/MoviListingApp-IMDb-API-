import { useState, useEffect } from "react";
import { List, Button, Icon } from "semantic-ui-react";
import AddMovie from "./AddMovie";
import { useHistory } from "react-router";
import { Container, Header } from "semantic-ui-react";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";
export default function MovieList() {
  const [isAdding, setIsAdding] = useState(false);
  const [list, setList] = useState([]);

  const getList = () => {
    axios.get("http://localhost:3000/streams").then((res) => {
      setList(res.data);
    });
  };
  console.log(list);
  const handleAddMovieButton = () => {
    setIsAdding(true);
    console.log("asd");
  };
  let history = useHistory();
  const handleMovieClick = () => {
    history.push("./movie");
  };
  const handleEditClick = () => {
    history.push("/edit");
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div style={{ paddingTop: "20px" }}>
      <Header as="h2">MovieList</Header>
      <List>
        {list.map((item) => {
          return (
            <List.Item key={item.id}>
              <List.Header onClick={handleMovieClick}>{item.movie}</List.Header>
              {item.description}
              <List.Content floated="right">
                <Icon onClick={handleEditClick} name="edit" />
                <Icon name="delete" color="red" />
              </List.Content>
            </List.Item>
          );
        })}
      </List>
      {!isAdding && (
        <PrimaryButton onClick={handleAddMovieButton} label={"Add Movie"} />
      )}
      {isAdding && <AddMovie setIsAdding={setIsAdding} />}
    </div>
  );
}
