import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItems = (itemCard) => {
    //dispatch an action(addItem action)
    dispatch(addItem(itemCard));
  };
  return (
    <div>
      <ul className="py-4">
        {data.map((itemCard) => {
          const { name, price, imageId } = itemCard?.card?.info;
          return (
            <li key={uuidv4()} className="flex justify-between py-4">
              <div className="w-10/12">
                {name} - ₹{" "}
                {price / 100 || itemCard?.card?.info?.defaultPrice / 100}
              </div>
              <div className="w-2/12 relative">
                {imageId ? <img src={CDN_LINK + imageId} /> : ""}
                <button
                  className="bg-black text-white px-4 py-2 rounded-md absolute z-10 top-0"
                  onClick={() => handleAddItems(itemCard)}
                >
                  Add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
