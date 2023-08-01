import { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/images/foozo.png";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img alt="foozo" src={myImage} className="image"></img>
  </a>
);

const HeaderComponent = () => {
  const [buttonText, setButtonText] = useState("Login");
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();
  const toggleLoggedInUser = () => {
    setLoggedInUser(!loggedInUser);
    loggedInUser ? setButtonText("Logout") : setButtonText("Login");
  };
  return (
    <div className="header">
      <Title />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="./about">
          <li>About</li>
        </Link>
        <Link to="./contact">
          <li>Contact</li>
        </Link>
        <Link to="./instamart">
          <li>Instamart</li>
        </Link>

        <li>Cart</li>
      </ul>
      {isOnline ? "❤️" : "💀"}
      {<button onClick={toggleLoggedInUser}>{buttonText}</button>}
    </div>
  );
};

export default HeaderComponent;
