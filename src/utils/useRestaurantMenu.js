import { useEffect, useState } from "react";
import { restaurant_URL_postfix, restaurant_URL_prefix } from "../constants";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo(id);
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      restaurant_URL_prefix + id + restaurant_URL_postfix
    );

    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card
        ?.card?.itemCards
    );
  }

  return { restaurant, menu };
};

export default useRestaurantMenu;
