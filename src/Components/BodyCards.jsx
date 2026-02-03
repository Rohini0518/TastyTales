import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import { restaurentsURL } from "../utils/constants.js";
import ShimmerUI from "./ShimmerUI.jsx";
import MenuDetails from "./MenuDetails.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import PromotedCard from "./PromotedCard.jsx";
import "../styles/bodyCards.css"; 

const BodyCards = () => {
  const [showRes, setShowRes] = useState(null);
  const [topRated, setTopRated] = useState(false);
  const [searchfilteredRes, setSearchFilteredRes] = useState(null);
  const [resSearch, setResSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("bodyCrads, card data");

  const fetchData = async () => {
    try {
      const response = await fetch(restaurentsURL);
      let json = await response.json();
      let resdata =
        json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log(resdata);
      setShowRes(resdata);
      setSearchFilteredRes(resdata);
    } catch (error) {
      console.log("data not found", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PromotedResCard = PromotedCard(Card);

  const handleTopRatedToggle = () => {
    setTopRated(!topRated);
    if (!topRated) {
      setSearchFilteredRes(showRes?.filter((res) => res.info.avgRating >= 4.0));
    } else {
      setSearchFilteredRes(showRes);
    }
  };

  

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <div className="text-8xl mb-6">📡</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          You're Offline
        </h1>
        <p className="text-slate-600 text-lg">
          Please check your internet connection
        </p>
      </div>
    );

  const restaurentList = resSearch === "" ? showRes : searchfilteredRes;

  return restaurentList == null || searchfilteredRes == null ? (
    <ShimmerUI />
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex justify-between items-center mb-8 animate-fade-in-down">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🍽️</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Tasty Tales
                </h1>
                <p className="text-orange-100 text-sm">
                  Order from the best restaurants
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="bg-white text-orange-600 px-6 py-2.5 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <span className="text-lg">{isLoggedIn ? "👤" : "🔑"}</span>
              {isLoggedIn ? "Log Out" : "Log In"}
            </button>
          </div>

          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Top Restaurant Chains
            </h2>
            <p className="text-orange-100 text-lg md:text-xl">
              Discover the finest dining experiences near you
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100 animate-slide-up">
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                value={resSearch}
                
                placeholder="Search for restaurants or cuisines..."
                className="w-full pl-12 pr-24 py-4 border-2 border-slate-200 rounded-xl text-base bg-slate-50 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 focus:shadow-lg"
              />

              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                {resSearch && (
                  <button
                    onClick={""}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  >
                    ✕
                  </button>
                )}
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setTopRated(false);
                setSearchFilteredRes(showRes);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !topRated
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-300/50 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span className="mr-2">🍴</span>
              All Restaurants
            </button>

            <label className="flex items-center gap-3 px-6 py-3 bg-slate-100 rounded-xl cursor-pointer hover:bg-slate-200 transition-all duration-300">
              <span className="font-semibold text-slate-700">
                ⭐ Top Rated Only
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={topRated}
                  onChange={handleTopRatedToggle}
                />
                <div className="w-11 h-6 bg-slate-300 rounded-full peer-checked:bg-orange-500 transition-all duration-300"></div>
                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
              </div>
            </label>

            
          </div>
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {searchfilteredRes?.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 opacity-20">🔍</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-3">
              No Restaurants Found
            </h3>
            <p className="text-slate-500 text-lg mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={handleClearSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {restaurentList?.map((restaurent, index) => (
              <Link
                key={restaurent.info.id}
                to={`/menu/${restaurent.info.id}`}
                className="transform transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {restaurent.info.sla.deliveryTime < 25 ? (
                  <PromotedResCard resData={restaurent} />
                ) : (
                  <Card resData={restaurent} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default BodyCards;