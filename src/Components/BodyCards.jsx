import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import { resList } from "../utils/mockData.js";

const BodyCards = () => {
  const [showRes, setShowRes] = useState(resList);
  const [topRated, setTopRated] = useState(true);
  const [searchfilteredRes, setSearchFilteredRes] = useState(resList);
  const [resSearch,setResSearch]=useState("");

  //   const fetchData=async ()=>{
  //     try{
  //     const response=await fetch(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.8974003&lng=83.39496319999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //         );
  //     let data =await response.json();
  //     console.log(data)
  //     console.log(data.data.cards[0])

  //     // setShowRes(data.data.cards[1].card.card.retaurants)
  //     console.log("rohini")
  //  }catch(error){
  //     console.log("data not found")
  //  }
  //   }
  //   useEffect(()=>{fetchData()},[]);
  //   console.log("rohini22")
  //   console.log(showRes)

  const handleAllrestaurants = () => {
    setTopRated(true);
    setShowRes(resList);
  };
  return (
    <div>
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
          console.log(searchfilteredRes)
        }}
        value={resSearch}
        className="border-2 p-2"
      />
      <button
        onClick={() => {
          console.log(resSearch)
          let searchfiltered=showRes.filter((res) => (res.info.name.toLowerCase().includes(resSearch.toLowerCase()) ));
          setSearchFilteredRes(searchfiltered)
        }}
        className="bg-transparent  hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
      >
        Search
      </button>
      <div className="flex flex-row gap-4 flex-wrap sm:mx-[5%]">
        {topRated
          ? searchfilteredRes.map((restaurent) => (
              <Card key={restaurent.info.id} resData={restaurent} />
            ))
          : searchfilteredRes
              .filter((res) => res.info.avgRating >= 4.2)
              .map((restaurent) => (
                <Card key={restaurent.info.id} resData={restaurent} />
              ))}
      </div>
    </div>
  );
};

export default BodyCards;