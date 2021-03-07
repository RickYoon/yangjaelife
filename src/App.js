import React from "react";
import { Route } from "react-router-dom";
import Living from "./page/Living";
import Food from "./page/Food";
import Cafe from "./page/Cafe";
import Education from "./page/Education";
import Home from "./page/Home";
import Development from "./page/Development";
import About from "./page/About";
import Health from "./page/Health";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/food" component={Food} />
      <Route exact path="/cafe" component={Cafe} />
      <Route exact path="/health" component={Health} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/hospital" component={Health} />
      <Route exact path="/estate" component={Health} />
      <Route exact path="/trip" component={Health} />
      {/* <Route exact path="/About" component={About} /> */}
    </div>
  );
}

export default App;
