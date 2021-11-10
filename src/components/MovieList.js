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
  const handleEditClick = (id) => {
    history.push("/edit");
  };
  const handleDeleteClick = (id) => {
    axios.delete(`http://localhost:3000/streams/${id}`).then(() => {
      getList();
    });
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
                <Icon onClick={()=>handleEditClick(item.id)} name="edit" />
                <Icon
                  onClick={() => handleDeleteClick(item.id)}
                  name="delete"
                  color="red"
                />
              </List.Content>
            </List.Item>
          );
        })}
      </List>
      {!isAdding && (
        <Button
          primary
          onClick={handleAddMovieButton}
          style={{ marginTop: "20px" }}
          type="submit"
        >
          Add Movie
        </Button>
      )}
      {isAdding && <AddMovie setIsAdding={setIsAdding} getList={getList} />}
    </div>
  );
}
