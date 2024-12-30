import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import { resList } from "../utils/mockData.js";
import { restaurentsURL } from "../utils/constants.js";

const BodyCards = () => {
  const [showRes, setShowRes] = useState([]);
  const [topRated, setTopRated] = useState(true);
  const [searchfilteredRes, setSearchFilteredRes] = useState([]);
  const [resSearch, setResSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(restaurentsURL);
      let data = await response.json();
      let resdata =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setShowRes(resdata);
      setSearchFilteredRes(resdata);
    } catch (error) {
      console.log("data not found");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAllrestaurants = () => {
    setTopRated(true);
    // setShowRes(resList);
    setResSearch("");
  };
  const restaurentList = resSearch == "" ? showRes : searchfilteredRes;
  console.log(restaurentList);
  return (
    <div className="m-4">
      <h2 className="font-bold text-xl">Top restaurant chains in City </h2>
      <button
        onClick={(e) => {
          e.target.innerText =
            e.target.innerText === "LogIn" ? "LogOut" : "LogIn";
        }}
        className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        LogIn
      </button>{" "}
      <button
        className="p-2 bg-green-500 rounded"
        onClick={handleAllrestaurants}
      >
        All Restaurants
      </button>
      <button
        onClick={() => setTopRated(false)}
        className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
      >
        Top Rated Restaurants
      </button>
      <input
        type="text"
        onChange={(e) => {
          setResSearch(e.target.value);
          console.log(searchfilteredRes);
        }}
        value={resSearch}
        className="border-2 p-2"
      />
      <button
        onClick={() => {
          console.log(resSearch);
          let searchfiltered = showRes.filter((res) =>
            res.info.name.toLowerCase().includes(resSearch.toLowerCase())
          );
          setSearchFilteredRes(searchfiltered);
        }}
        className="bg-transparent  hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
      >
        Search
      </button>
      <div className="flex flex-row gap-4 flex-wrap sm:mx-[5%]">
        {topRated
          ? restaurentList.map((restaurent) => (
              <Card key={restaurent.info.id} resData={restaurent} />
            ))
          : restaurentList
              .filter((res) => res.info.avgRating >= 4.0)

              .map((restaurent) => (
                <Card key={restaurent.info.id} resData={restaurent} />
              ))}
        {/* {filterRestaurent.map((restaurent)=><Card key={restaurent.info.id} resData={restaurent} />)} */}
      </div>
    </div>
  );
};

export default BodyCards;
