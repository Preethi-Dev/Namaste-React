import { CDN_LINK } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ data }) => {
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
              <div className="w-2/12">
                {imageId ? <img src={CDN_LINK + imageId} /> : ""}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
