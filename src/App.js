import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
           Home
          </Route>
          <Route path="/men">
            Men
          </Route>
          <Route path="/women">
            Women
          </Route>
          <Route path="/children">
            children
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
