import { useState } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/images/delhiveroo.png";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="h-30 w-28 ml-10 py-5 px-3" alt="foozo" src={myImage}></img>
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
    <div className="flex justify-between bg-custom-green shadow-lg">
      <Title />
      <ul className="flex py-8 mt-5">
        <Link to="/">
          <li className="px-3 shadow-sm hover:shadow-lg font-bold">Home</li>
        </Link>
        <Link to="./about">
          <li className="px-3 shadow-sm hover:shadow-lg font-bold">About</li>
        </Link>
        <Link to="./contact">
          <li className="px-3 shadow-sm hover:shadow-lg font-bold">Contact</li>
        </Link>
        <Link to="./instamart">
          <li className="px-3 shadow-sm hover:shadow-lg font-bold">
            Instamart
          </li>
        </Link>

        <Link>
          <li className="px-3 shadow-sm hover:shadow-lg font-bold">Cart</li>
        </Link>
      </ul>
      <div className="flex justify-between w-20 mr-12 mt-16">
        <div className="h-6 w-20 mr-5 mt-2">{isOnline ? "📶" : "🌐"}</div>
        <button
          className="w-40 rounded-md bg-black text-white font-bold h-9 px-2 py-0"
          onClick={toggleLoggedInUser}
        >
          {buttonText}
        </button>
      </div>
      {}
    </div>
  );
};

export default HeaderComponent;
