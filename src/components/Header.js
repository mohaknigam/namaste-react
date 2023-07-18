import myImage from "../../images/foozo.png";

const Title = () => (
  <a href="/">
    <img alt="foozo" src={myImage} className="image"></img>
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
