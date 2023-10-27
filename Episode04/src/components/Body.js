import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  //local state variable
  let [listOfRestraunts, setListOfRestraunts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9744943&lng=80.2105601&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestraunts(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering
  // if (listOfRestraunts.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">
        <input
          type="text"
          className="searchBox"
          placeholder="search for restraunts"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const searchedList = listOfRestraunts.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              e.target.value = "";

              setListOfRestraunts(searchedList);
            }
          }}
        />
      </div>
        */}
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
      {/* <div className="clear">
        <button
          className="clear-btn"
          onClick={() => {
            setListOfRestraunts(restraunts);
          }}
        >
          clear
        </button>
      </div>
        */}
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestaurantCard key={uuidv4()} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
