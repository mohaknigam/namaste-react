import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const Restaurantcard = ({ name, cloudinaryImageId, cuisines, locality }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-52 h-130 p-1 m-1 shadow-lg bg-gray-100 flex flex-col overflow-hidden">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="FoodIcon"></img>
      <h2 className="font-bold text-xl p-1">{name}</h2>
      <h3 className="p-1 ">{cuisines?.join(", ")}</h3>
      <h4 className="p-1">{locality}</h4>
      <h4 className="p-1 font-bold">{user.name}</h4>
    </div>
  );
};

export default Restaurantcard;
