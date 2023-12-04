import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MenuByCategory from "./MenuByCategory";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [vegStatus, setVegStatus] = useState(false);

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, totalRatingsString, cuisines, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  //find length of the VEG items according to category
  const findLength = (itemCards) => {
    const veg = itemCards.filter((item) => item?.card?.info?.isVeg);
    return veg.length;
  };

  const itemsByCategory = cards.filter((card) => card?.card?.card?.itemCards);
  console.log(itemsByCategory);
  // cards.map((card) => {
  //   if (card?.card?.card?.itemCards) {
  //     if (findLength(card?.card?.card?.itemCards) !== 0)
  //       console.log(
  //         `${card?.card?.card?.title} (${findLength(
  //           card?.card?.card?.itemCards
  //         )})`
  //       );
  //   }
  // });

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <p className="ratings">{totalRatingsString}</p>
      <h2>Menu</h2>
      <input
        type="checkbox"
        id="veg-only"
        onClick={(e) => {
          setVegStatus(e.target.checked);
        }}
      />
      <label htmlFor="veg-only">Veg Only</label>

      {itemsByCategory.map((item, index) => (
        <MenuByCategory
          key={uuidv4()}
          category={item}
          index={index}
          veg={vegStatus}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
