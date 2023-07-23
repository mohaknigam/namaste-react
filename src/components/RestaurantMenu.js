import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  console.log(params);
  const { id } = params;

  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.449923&lng=80.3318736&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
        ?.card?.itemCards
    );
    console.log(menu);
  }

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
