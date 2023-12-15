import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const MenuByCategory = (props) => {
  const { category, showItems, veg, setShowIndex } = props;
  const { title, itemCards } = category?.card?.card;
  const [vegOrNonVeg, setVegOrNonVeg] = useState(itemCards);
  const vegItemCards = itemCards.filter(
    (itemCard) => itemCard?.card?.info?.isVeg === 1
  );

  useEffect(() => {
    veg ? setVegOrNonVeg(vegItemCards) : setVegOrNonVeg(itemCards);
  }, []);
  return (
    <div className="flex flex-col mt-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          setShowIndex();
        }}
      >
        <h3 className="font-semibold text-xl">
          {title} ({vegOrNonVeg.length})
        </h3>
        <h3 className="cursor-pointer">{showItems ? "⬇️" : "⬆️"}</h3>
      </div>

      {showItems && <ItemList data={vegOrNonVeg} />}
    </div>
  );
};

export default MenuByCategory;
