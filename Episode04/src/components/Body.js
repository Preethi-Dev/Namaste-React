import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestrauntList from "../utils/useRestrauntList";

const Body = () => {
  //local state variable
  //whenever state variable updated, react trigger the reconciliation cycle (re-render the component)
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useRestrauntList(setListOfRestraunts, setFilteredRestraunts);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You are offline</h1>;

  //conditional rendering
  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          {/* bind the input value to search term */}
          <input
            type="text"
            className="search-box"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restraunt card and update the ui
              //get the searchTerm
              const filteredRestraunts = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredRestraunts(filteredRestraunts);
              console.log(searchTerm);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let topRated = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestraunts(topRated);
          }}
        >
          Top Rated Restraunt
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestraunts(listOfRestraunts);
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="res-container">
        {filteredRestraunts.map((restraunt) => {
          const resId = restraunt.info.id;
          return (
            <Link to={"/restaurants/" + resId} key={resId}>
              <RestaurantCard resData={restraunt} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
