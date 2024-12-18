import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import data from "./db";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={data.dogs} />
          </Route>
          <Route
            path="/dogs/:name"
            render={(props) => <DogDetails {...props} dogs={data.dogs} />}
          />
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
