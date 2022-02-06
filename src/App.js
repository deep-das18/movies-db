import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
import Header from "./Header";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id" children={<Movie />}></Route>
      </Switch>
    </>
  );
}

export default App;
