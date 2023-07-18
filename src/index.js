import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";

// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React";
// document.getElementById("root").appendChild(heading);

const AppComponent = () => (
  <>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
