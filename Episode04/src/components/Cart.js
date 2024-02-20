import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import EmptyCartState from "./EmptyCartState";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch an action(clearCart)
    dispatch(clearCart());
  };
  return (
    <div className="w-8/12 m-auto">
      <h1 className="text-4xl text-center my-6">Cart</h1>
      <button
        className="bg-gray-200 text-gray-700 px-4 py-3 font-semibold rounded-lg flex ml-auto my-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <EmptyCartState />
      ) : (
        <ItemList data={cartItems} />
      )}
    </div>
  );
};

export default Cart;
