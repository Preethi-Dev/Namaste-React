import { restraunts } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Restraunt</button>
      </div>
      <div className="res-container">
        {restraunts.map((restraunt) => (
          <RestaurantCard key={uuidv4()} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
