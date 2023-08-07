import store from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import Cartcard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1>Cart Items - {cartItems.length}</h1>
      <button className="bg-pink-400" onClick={handleClick}>
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => {
          return (
            <Cartcard
              key={item?.card?.info?.id}
              name={item?.card?.info?.name}
              cloudinaryImageId={item?.card?.info?.imageId}
              defaultPrice={item?.card?.info?.defaultPrice}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cart;
