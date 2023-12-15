import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withRestaurantCardOffer } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestrauntList from "../utils/useRestrauntList";
import UserContext from "../utils/userContext";

const Body = () => {
  //local state variable
  //whenever state variable updated, react trigger the reconciliation cycle (re-render the component)
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const RestaurantCardOffer = withRestaurantCardOffer(RestaurantCard);

  const { setUserName } = useContext(UserContext);

  useRestrauntList(setListOfRestraunts, setFilteredRestraunts);
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You are offline</h1>;

  //conditional rendering
  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-5 p-4 gap-3">
        <div className="flex gap-2">
          {/* bind the input value to search term */}
          <input
            type="text"
            className="border-b-2 border-gray"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="bg-pink-100 px-4 py-2 rounded-md"
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
          className="bg-gray-200 px-4 py-2 ml-auto rounded-md"
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
          className="bg-gray-200 px-4 py-2 rounded-md"
          onClick={() => {
            setFilteredRestraunts(listOfRestraunts);
          }}
        >
          Clear Filters
        </button>
        <input
          type="text"
          className="border-b-2 border-gray"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-wrap items-stretch gap-4 justify-center">
        {filteredRestraunts.map((restraunt) => {
          const resId = restraunt.info.id;
          return (
            <Link
              className="bg-gray-100 rounded-md hover:bg-gray-200"
              to={"/restaurants/" + resId}
              key={resId}
            >
              {restraunt.info.aggregatedDiscountInfoV3?.header ? (
                <RestaurantCardOffer resData={restraunt} />
              ) : (
                <RestaurantCard resData={restraunt} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
