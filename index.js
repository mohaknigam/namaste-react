import React from "react";
import ReactDOM from "react-dom/client";

// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React";
// document.getElementById("root").appendChild(heading);

const heading = (
  <h1 id="title" key="h2">
    Namaste React in JSX.
  </h1>
);

const HeaderComponent = function () {
  return (
    <div>
      {heading}
      <h2>Namaste React Functional Component</h2>
      <h2>This is h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
