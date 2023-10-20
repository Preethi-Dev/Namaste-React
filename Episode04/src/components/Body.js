import { useState } from "react";
import { restraunts } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  //local state variable
  let [listOfRestraunts, setListOfRestraunts] = useState(restraunts);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let topRated = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunts(topRated);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="clear">
        <button
          className="clear-btn"
          onClick={() => {
            setListOfRestraunts(restraunts);
          }}
        >
          clear
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestaurantCard key={uuidv4()} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
