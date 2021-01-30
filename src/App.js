import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Balu" animal="Dog" breed="Bern"/>
      <Pet name="Bella" animal="Cat" breed="British"/>
      <Pet name="Arny" animal="Rabbit" breed="House"/>
    </div>
  )
};

render(<App />, document.getElementById("root"));
