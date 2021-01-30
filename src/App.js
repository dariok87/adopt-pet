import React from 'react';
import { render } from "react-dom";
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Balu",
      animal: "Dog",
      breed: "Bern"
    }),
    React.createElement(Pet, {
      name: "Bella",
      animal: "Cat",
      breed: "British",
    }),
    React.createElement(Pet, {
      name: "Arny",
      animal: "Rabbit",
      breed: "House",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
