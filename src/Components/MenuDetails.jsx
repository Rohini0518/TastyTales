import { useEffect, useState } from "react";
import { restaurantMenu } from "../utils/constants";
import { useParams } from "react-router-dom";

export default function MenuDetails() {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${restaurantMenu}${resId}`);
      const json = await response.json();

      // Restaurant info
      const info = json?.data?.cards[2]?.card?.card?.info;

      console.log(info,"res info");
      // Menu categories
      const menuCards =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        [];
      console.log(menuCards);
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

  if (resMenu === null) return <h1>Loading....</h1>;

  const { info, categories } = resMenu;

  return (
    <div className="mx-[20%]">
      {/* Restaurant Details */}
      <p className="text-4xl font-bold my-4">{info?.name}</p>

      <div className="border text-2xl bg-white border-8 border-gray-200 font-bold shadow rounded-xl p-4">
        <p className="flex gap-2 my-2">
          ⭐ {info?.avgRating}
          <span>.</span>
          <span className="ml-1">{info?.costForTwoMessage}</span>
        </p>

        <p className="text-green-900">{info?.cuisines?.join(", ")}</p>

        <p>{info?.sla?.slaString}</p>
      </div>

      <h2 className="text-xl flex justify-center font-semibold my-6">
        🥗 MENU 🍽️
      </h2>

      {/* Search Box */}
      <div className="flex rounded-md border-2 border-gray-200">
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none p-4"
        />
        <button className="bg-gray-300 px-5">🔍</button>
      </div>

      {/* Menu Categories */}
      {categories.map((cat, index) => (
        <div key={index} className="my-6">
          <h2 className="text-2xl font-bold">{cat.card.card.title}</h2>

          {cat.card.card.itemCards.map((item) => {
            const food = item.card.info;

            return (
              <div
                key={food.id}
                className="flex justify-between my-4 text-xl p-4 border rounded-xl"
              >
                <div>
                  <p className="font-bold">{food.name}</p>

                  <p className="font-bold my-2">₹{food.price / 100}</p>

                  <p>{food.description}</p>
                </div>

                <div className="relative w-[200px] h-[150px]">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      food.imageId
                    }
                    alt="food"
                  />

                  <button className="absolute bottom-2 left-1/2 -translate-x-1/2 px-6 py-2 bg-orange-600 text-white rounded-xl">
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
