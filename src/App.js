import "./App.css";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditMovie from "./components/EditMovie";
import Movie from "./components/Movie";
import { Container, Header } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/edit">
            <EditMovie />
          </Route>
          <Route exact path="/movie">
            <Movie />
          </Route>
        </Switch>
        <div></div>
      </Router>
    </Container>
  );
}

export default App;
