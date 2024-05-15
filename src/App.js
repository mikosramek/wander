import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ThoughtForm from "./Components/ThoughtForm.jsx";
import Intro from "./Components/Intro";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Intro} />
      <Route path="/ThoughtForm" component={ThoughtForm} />
      <Route path="/Results" component={Intro} />
    </Router>
  );
}

export default App;
