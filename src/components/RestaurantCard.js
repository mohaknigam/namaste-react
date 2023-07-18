import { IMG_CDN_URL } from "../constants";

const Restaurantcard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravel,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="FoodIcon"></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{Math.round(lastMileTravel)} km</h4>
    </div>
  );
};

export default Restaurantcard;
