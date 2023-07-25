import { useState } from "react";

const Profile = (props) => {
  const { name } = props;
  const [counter, setCounter] = useState(0);

  return (
    <div className="profile">
      <h1>Welcome to Profile</h1>
      <h2>Name : {name}</h2>
      <h1>Functional Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Press</button>
    </div>
  );
};

export default Profile;
