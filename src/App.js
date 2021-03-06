import React from "react";
import { Route } from "react-router-dom";
import Living from "./page/Living";
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
      <Route exact path="/living" component={Living} />
      <Route exact path="/health" component={Health} />
      {/* <Route exact path="/About" component={About} /> */}
    </div>
  );
}

export default App;
