import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React";
// document.getElementById("root").appendChild(heading);

const heading = React.createElement("h1", {}, "Namaste React 2!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
