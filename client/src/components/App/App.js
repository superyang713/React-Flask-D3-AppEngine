import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Header from "../Header/Header";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/plot" component={About} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
