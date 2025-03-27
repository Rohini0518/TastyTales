import { useEffect, useState } from "react";
// import useFetch from "./useFetch";
import { restaurantMenu } from "../utils/constants";
import { useParams } from "react-router-dom";

export default function MenuDetails() {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.8974003&lng=83.39496319999999&restaurantId=${resId}`
      );
      let data = await response.json();
      setResMenu(data?.data);
    } catch (error) {
      console.log("data not found");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const resDetails = resMenu?.cards[2]?.card?.card?.info || {};
  const { name, id, avgRating, costForTwoMessage } = resDetails;

  if (resMenu === null) return <h1>Loading....</h1>;
  return (
    <div className=" mx-[20%]">
      <p className="text-4xl font-bold my-4">{name}</p>
      <div className="border text-2xl  bg-white border-8 border-gray-200 font-bold shadow rounded-xl p-4">
        <p className="flex gap-2 my-2 ">
          <img
            className="w-[30px]"
            src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
            alt="veg"
          />
          {avgRating}
          <span>.</span>
          <span className="ml-1">{costForTwoMessage}</span>
        </p>
        <p className="text-green-900">{resDetails.cuisines.join(", ")}</p>
        <p>{resDetails?.sla?.slaString}</p>
      </div>
      <h2 className="text-xl flex justify-center font-semibold my-6">
        🥗MENU🍽️
      </h2>
      <div className="flex rounded-md border-2 border-gray-200 overflow-hidden font-[sans-serif]">
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none bg-white text-gray-600 text-sm p-4 "
        />
        <button
          type="button"
          className="flex items-center justify-center bg-gray-300 rounded px-5"
        >
          🔍
        </button>
      </div>
      <div className="my-4">
        <button class="bg-transparent  hover:bg-green-300 text-blue-700 me-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl">
          Pure Veg
        </button>
        <button class="bg-transparent hover:bg-red-500 text-blue-700 me-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl">
          Bestseller
        </button>
      </div>

      {/* {cards[4].groupedCard.cards[1].card.card.itemCards.map((item)=>(<div className="flex  justify-between my-4 text-xl p-4 border border-gray-400 rounded-xl">
        <div>
          <img className="w-[25px]" src="https://cdn-icons-png.flaticon.com/512/1971/1971034.png" alt="veg"/>
          <img className="w-[25px]" src="https://cdn.vectorstock.com/i/500p/00/43/non-vegetarian-sign-veg-logo-symbol-vector-50890043.jpg" alt="veg"/>
          <p className="font-bold"> 
          Strawberry icecream with cheese cke sundae
          {item.card.info.name}
          </p>
          <p className="font-bold my-2">
          {item.card.info.(price/100)}
            295</p>
          <p className="flex gap-2 my-2"><img className="w-[30px]" src="https://static-00.iconduck.com/assets.00/rating-icon-512x488-f3wudmx0.png " alt="veg"/>
          // {item.card.info.aggregatedRating.rating}
          //   3.5</p>
          <p>
           {item.card.info.description}


          ice cream description...</p>
        </div>
        <div className="relative w-[280px] h-[180px] border rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+{item.card.info.imageId}
            src="https://images.pexels.com/photos/1893566/pexels-photo-1893566.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Cuisine img"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-8 py-3 font-semibold rounded-xl text-white hover:bg-white hover:text-red-600 hover:font-bold bg-orange-600 ">
            Add
          </button>
          <hr />
        </div>
      </div>))} */}

      <div className="flex  justify-between my-4 text-xl p-4 border border-gray-400 rounded-xl">
        <div>
          <img
            className="w-[25px]"
            src="https://cdn-icons-png.flaticon.com/512/1971/1971034.png"
            alt="veg"
          />
          {/* <img className="w-[25px]" src="https://cdn.vectorstock.com/i/500p/00/43/non-vegetarian-sign-veg-logo-symbol-vector-50890043.jpg" alt="veg"/> */}
          <p className="font-bold">
            Strawberry icecream with cheese cke sundae
            {/* {cards[4].groupedCard.cards[1].card.card.itemCards[0].card.info.name} */}
          </p>
          <p className="font-bold my-2">
            {/* {cards[4].groupedCard.cards[1].card.card.itemCards[0].card.info.(price/100)} */}
            295
          </p>
          <p className="flex gap-2 my-2">
            <img
              className="w-[30px]"
              src="https://static-00.iconduck.com/assets.00/rating-icon-512x488-f3wudmx0.png "
              alt="veg"
            />{" "}
            3.5
          </p>
          <p>ice cream description...</p>
        </div>
        <div className="relative w-[280px] h-[180px] border rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1893566/pexels-photo-1893566.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Cuisine img"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-8 py-3 font-semibold rounded-xl text-white hover:bg-white hover:text-red-600 hover:font-bold bg-orange-600 ">
            Add
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}
