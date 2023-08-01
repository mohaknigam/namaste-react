import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

/* 
The automatic rendering behavior you are observing is due to the usage of the useParams hook from react-router-dom in your RestaurantMenu component. The useParams hook allows your component to access the dynamic parts of the current URL, in this case, the id parameter.

When the id parameter in the URL changes, the useParams hook will detect the change and trigger a re-render of the RestaurantMenu component. This is the expected behavior because React components re-render whenever there are changes in their props or state. In this case, the id parameter is part of the component's props since it's accessed via the useParams hook.
*/
const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  const { id } = params;

  const { restaurant, menu } = useRestaurantMenu(id);

  console.log("render - Re=Ms");

  return menu?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1>{"restaurant id : " + restaurant?.id}</h1>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          className="menu-image"
          alt="restaurant-img"
        />
        <h1 className="rest-name">{restaurant?.name}</h1>
        <h2>{restaurant?.city}</h2>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {menu?.map((item) => {
            return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
