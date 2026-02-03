import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import { restaurentsURL } from "../utils/constants.js";
import ShimmerUI from "./ShimmerUI.jsx";
import MenuDetails from "./MenuDetails.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import PromotedCard from "./PromotedCard.jsx";

const BodyCards = () => {
  const [showRes, setShowRes] = useState(null);
  const [topRated, setTopRated] = useState(false);
  const [searchfilteredRes, setSearchFilteredRes] = useState(null);
  const [resSearch, setResSearch] = useState("");
console.log("bodyCrads ,card data")

  const fetchData = async () => {
    try {
      const response = await fetch(restaurentsURL);
      let json = await response.json();
      let resdata =json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        console.log(resdata)
      setShowRes(resdata);
      setSearchFilteredRes(resdata);
    } catch (error) {
      console.log("data not found",error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAllrestaurants = () => {
    setTopRated(false);
    setResSearch("");
  };
  const PromotedResCard = PromotedCard(Card);
  const handleTopRatedToggle = () => {
    setTopRated(!topRated);
    if (!topRated) {
      setSearchFilteredRes(showRes?.filter((res) => res.info.avgRating >= 4.0));
    } else {
      setSearchFilteredRes(showRes);
    }
  };

  const handleSearch = () => {};
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>Your are offline check internet status</h1>;

  const restaurentList = resSearch == "" ? showRes : searchfilteredRes;
  return restaurentList == null || searchfilteredRes == null ? (
    <ShimmerUI />
  ) : (
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
        onClick={() => setTopRated(true)}
      >
        All Restaurants
      </button>
      <button
        onClick={() => setTopRated(false)}
        className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
      >
        Top Rated Restaurants
      </button>
      <label
        for="Toggle1"
        className="inline-flex items-center space-x-4 cursor-pointer text-gray-800"
      >
        <span>Top Rated</span>
        <span className="relative">
          <input
            id="Toggle1"
            type="checkbox"
            className="hidden peer"
            checked={topRated}
            onChange={handleTopRatedToggle}
          />{" "}
          <div className="w-10 h-6 rounded-full shadow-inner bg-gray-600 peer-checked:bg-orange-600"></div>
          <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
        </span>
      </label>
      <input
        type="text"
        onChange={(e) => {
          setResSearch(e.target.value);
        }}
        value={resSearch}
        className="border-2 p-2"
      />
      <button
        // onClick={() => {
        //   console.log(resSearch);
        //   let searchfiltered = showRes.filter((res) =>
        //     res.info.name.toLowerCase().includes(resSearch.toLowerCase())
        //   );
        //   setSearchFilteredRes(searchfiltered);
        // }}
        className="bg-transparent  hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
      >
        Search
      </button>
      <div className="flex flex-row gap-4 flex-wrap sm:mx-[5%]">
        {/* {topRated
          ? restaurentList.map((restaurent) => (
              <Link key={restaurent.info.id} to={`/menu/${restaurent.info.id}`}>
                <Card resData={restaurent} />
              </Link>
            ))
          : restaurentList
              .filter((res) => res.info.avgRating >= 4.0)
              .map((restaurent) => (
                <Link
                  key={restaurent.info.id}
                  to={`/menu/${restaurent.info.id}`}
                >
                  <Card key={restaurent.info.id} resData={restaurent} />
                </Link>
              ))} */}

        {restaurentList 
            
            .map((restaurent) => (
              <Link key={restaurent.info.id} to={`/menu/${restaurent.info.id}`}>
                {restaurent.info.sla.deliveryTime < 25 ? (
                  <PromotedResCard resData={restaurent} />
                ) : (
                  <Card resData={restaurent} />
                )}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default BodyCards;
