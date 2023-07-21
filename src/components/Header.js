import { useState } from "react";
import myImage from "../../images/foozo.png";

const Title = () => (
  <a href="/">
    <img alt="foozo" src={myImage} className="image"></img>
  </a>
);

const HeaderComponent = () => {
  const [buttonText, setButtonText] = useState("Login");
  const [loggedInUser, setLoggedInUser] = useState(false);
  const toggleLoggedInUser = () => {
    setLoggedInUser(!loggedInUser);
    loggedInUser ? setButtonText("Logout") : setButtonText("Login");
  };
  return (
    <div className="header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      {<button onClick={toggleLoggedInUser}>{buttonText}</button>}
    </div>
  );
};

export default HeaderComponent;
