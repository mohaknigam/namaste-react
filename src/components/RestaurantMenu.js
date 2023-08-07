import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

/* 
The automatic rendering behavior you are observing is due to the usage of the useParams hook from react-router-dom in your RestaurantMenu component. The useParams hook allows your component to access the dynamic parts of the current URL, in this case, the id parameter.

When the id parameter in the URL changes, the useParams hook will detect the change and trigger a re-render of the RestaurantMenu component. This is the expected behavior because React components re-render whenever there are changes in their props or state. In this case, the id parameter is part of the component's props since it's accessed via the useParams hook.
*/
const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const { restaurant, menu } = useRestaurantMenu(id);

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

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
            return (
              <li key={item?.card?.info?.id}>
                <div className="flex items-center">
                  {item?.card?.info?.name}{" "}
                  <button
                    className="bg-green-200 m-5 p-1"
                    onClick={() => handleAddClick(item)}
                  >
                    Add
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
