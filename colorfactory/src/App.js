import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import NavBar from "./NavBar";
import ColorForm from "./ColorForm";
import Color from "./Color";
import "./App.css"; // Import the CSS file

function App() {
  const colorsArray = ["red", "blue"];
  const [colors, setColors] = useState(colorsArray);
  const history = useHistory();
  /** Add new item object to array. */
  const addColor = (color) => {
    let newColor = color;
    setColors((colors) => [...colors, newColor]);
  };

  return (
    <div className="app-container">
      <h1 className="app-header">Color Picker App</h1>
      <BrowserRouter>
        <br></br>

        <br></br>
        <Switch>
          <Route
            exact
            path="/colors"
            render={() => <NavBar colors={colors} />}
          ></Route>
          <Route
            path="/colors/new"
            render={() => <ColorForm addColor={addColor} />}
          />
          <Route
            path="/colors/:color"
            render={(props) => {
              const { color } = props.match.params;

              if (colors.includes(color)) {
                return <Color color={color}>{color}</Color>;
              } else {
                setColors(colors);
                props.history.push("/");
                return null;
              }
            }}
          />
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
