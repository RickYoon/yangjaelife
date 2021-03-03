import React from "react";
import { Route } from "react-router-dom";
import Living from "./page/Living";
import Home from "./page/Home";
import Development from "./page/Development";
import About from "./page/About";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Route exact path="/" component={Living} />
      {/* <Route exact path="/health" component={Living} />
      <Route exact path="/development" component={Development} />
      <Route exact path="/About" component={About} /> */}
    </div>
  );
}

export default App;
