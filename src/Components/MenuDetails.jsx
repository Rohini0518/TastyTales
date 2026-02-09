import { useEffect, useState } from "react";
import { restaurantMenu } from "../utils/constants";
import { useParams } from "react-router-dom";
import "../styles/menuDetails.css";

export default function MenuDetails() {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(`${restaurantMenu}${resId}`);
      const json = await response.json();

      // Restaurant info
      const info = json?.data?.cards[2]?.card?.card?.info;
      console.log(info, "res info");

      // Menu categories
      const menuCards =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      // console.log(menuCards);

      const categories = menuCards.filter((c) => c.card?.card?.itemCards);

      setResMenu({
        info: info,
        categories: categories,
      });
    } catch (error) {
      console.log("data not found", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resMenu === null)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="loading-spinner w-12 h-12 border-4 border-orange-100 border-t-orange-500 rounded-full"></div>
        <p className="mt-5 text-slate-700 text-lg font-medium">
          Preparing your menu...
        </p>
      </div>
    );

  const { info, categories } = resMenu;

  // Filter items based on search
  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      card: {
        ...cat.card,
        card: {
          ...cat.card.card,
          itemCards: cat.card.card.itemCards.filter((item) =>
            item.card.info.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
          ),
        },
      },
    }))
    .filter((cat) => cat.card.card.itemCards.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 mt-8">
      <div className="relative bg-gradient-to-br from-slate-900 via-orange-950 to-amber-950 text-white px-5 py-16 overflow-hidden">
        <div className="hero-decoration absolute -top-1/2 -right-10 w-96 h-96 md:w-[600px] md:h-[600px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-block bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-200 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 animate-fade-in-down">
            Now Open
          </div>

          {/* Restaurant Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight animate-fade-in-up drop-shadow-2xl">
            {info?.name}
          </h1>

          {/* Cuisines */}
          <p className="text-base md:text-lg text-orange-200/90 mb-10 font-light tracking-wide animate-fade-in-up-delay">
            {info?.cuisines?.join(" • ")}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-10 items-center animate-fade-in-up-delay-2">
            {/* Rating */}
            <div className="flex items-center gap-4">
              <span className="text-3xl drop-shadow-lg">⭐</span>
              <div>
                <div className="text-2xl font-bold">{info?.avgRating}</div>
                <div className="text-xs text-orange-300 uppercase tracking-wider mt-1">
                  Rating
                </div>
              </div>
            </div>

            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>

            {/* Delivery Time */}
            <div className="flex items-center gap-4">
              <span className="text-3xl drop-shadow-lg">🕒</span>
              <div>
                <div className="text-2xl font-bold">{info?.sla?.slaString}</div>
                <div className="text-xs text-orange-300 uppercase tracking-wider mt-1">
                  Delivery
                </div>
              </div>
            </div>

            <div className="w-px h-10 bg-white/20 hidden sm:block"></div>

            {/* Cost */}
            <div className="flex items-center gap-4">
              <span className="text-3xl drop-shadow-lg">💰</span>
              <div>
                <div className="text-2xl font-bold">
                  {info?.costForTwoMessage}
                </div>
                <div className="text-xs text-orange-300 uppercase tracking-wider mt-1">
                  For Two
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200 px-5 py-6">
        <div className="max-w-6xl mx-auto relative">
          {/* Search Icon */}
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
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

          {/* Search Input */}
          <input
            type="text"
            className="w-full pl-14 pr-12 py-4 border-2 border-slate-200 rounded-2xl text-base bg-slate-50 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-orange-100"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-slate-200 hover:bg-orange-500 hover:text-white w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all duration-200 hover:scale-110"
              onClick={() => setSearchQuery("")}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Menu Container */}
      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Menu Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Menu
          </h2>
          <div className="bg-orange-100 text-orange-900 px-5 py-2 rounded-full text-sm font-semibold">
            {filteredCategories.reduce(
              (acc, cat) => acc + cat.card.card.itemCards.length,
              0,
            )}{" "}
            dishes
          </div>
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-5 opacity-30">🔍</div>
            <p className="text-slate-500 text-lg">
              No dishes found matching "{searchQuery}"
            </p>
          </div>
        ) : (
          /* Categories */
          <div className="flex flex-col gap-10">
            {filteredCategories.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="mb-7 pb-5 border-b-2 border-orange-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3 flex-wrap">
                    {cat.card.card.title}
                    <span className="text-base font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {cat.card.card.itemCards.length}
                    </span>
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-6">
                  {cat.card.card.itemCards.map((item, itemIndex) => {
                    const food = item.card.info;
                    return (
                      <div
                        key={food.id || itemIndex}
                        className="flex flex-col sm:flex-row justify-between gap-6 p-5 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-all duration-300 hover:translate-x-1"
                      >
                        {/* Item Details */}
                        <div className="flex-1 flex flex-col gap-2">
                          {/* Name and Veg Indicator */}
                          <div className="flex items-start gap-3">
                            <h4 className="text-lg font-semibold text-slate-900 leading-snug">
                              {food.name}
                            </h4>
                            {food.isVeg !== undefined && (
                              <span
                                className={`flex-shrink-0 w-5 h-5 border-2 rounded flex items-center justify-center mt-0.5 ${
                                  food.isVeg
                                    ? "border-green-600"
                                    : "border-red-600"
                                }`}
                              >
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    food.isVeg ? "bg-green-600" : "bg-red-600"
                                  }`}
                                ></span>
                              </span>
                            )}
                          </div>

                          {/* Price */}
                          <p className="text-xl font-bold text-orange-600">
                            ₹{(food.price / 100).toFixed(2)}
                          </p>

                          {/* Description */}
                          {food.description && (
                            <p className="text-sm text-slate-600 leading-relaxed mt-1">
                              {food.description.length > 120
                                ? `${food.description.substring(0, 120)}...`
                                : food.description}
                            </p>
                          )}
                        </div>

                        {/* Image and Add Button */}
                        <div className="flex sm:flex-col items-center gap-3">
                          {/* Image */}
                          {food.imageId && (
                            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                              <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${food.imageId}`}
                                alt={food.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                          )}

                          {/* Add Button */}
                          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wide shadow-lg shadow-orange-300/50 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 whitespace-nowrap">
                            <span className="text-lg font-bold">+</span>
                            Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
