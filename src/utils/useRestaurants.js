import { useState, useEffect } from "react";
import swiggyAPI from "./swiggyAPI.json";
import { swiggy_API } from "../constants";

/* 
  To access the setFilteredRestaurants function from the useRestaurants custom hook in the BodyComponent, you need to modify the useRestaurants custom hook to expose this function along with the state values. Currently, the useRestaurants hook only returns filteredRestaurants and allRestaurants, but you also need to return setFilteredRestaurants from the hook.
  */

const useRestaurants = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  function getRestaurants() {
    const json = swiggyAPI;

    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return { filteredRestaurants, setFilteredRestaurants, allRestaurants };
};

export default useRestaurants;
