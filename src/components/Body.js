import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Restaurantcard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { filterList } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Body");
  }, []);

  /* 
  To access the setFilteredRestaurants function from the useRestaurants custom hook in the BodyComponent, you need to modify the useRestaurants custom hook to expose this function along with the state values. Currently, the useRestaurants hook only returns filteredRestaurants and allRestaurants, but you also need to return setFilteredRestaurants from the hook.
  */

  const { filteredRestaurants, setFilteredRestaurants, allRestaurants } =
    useRestaurants();

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-custom-green mt-5 shadow-lg">
        <input
          type="text"
          className="rounded-md ml-10 p-1 border-collapse"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="my-6 mx-2 rounded-md bg-black text-white px-2 py-1 font-bold"
          onClick={() => {
            const data = filterList(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <Restaurantcard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
