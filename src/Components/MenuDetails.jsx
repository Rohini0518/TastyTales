export default function MenuDetails() {
  return (
    <div className=" mx-[20%]">
      <p className="text-4xl font-bold my-4">
        Baskin Robbins-Ice Cream Desserts
      </p>
      <div className="border text-xl bg-white border-gray-400 font-semibold shadow rounded-xl p-4">
        <p>Rating-250 for two</p>
        <p className="text-green-900">cusines-dessert,icecreams</p>
        <p>Deliverytime-15-20 mins</p>
      </div>
      <h2>MENU</h2>
      <div>Search for dishese</div>
      <div>
        <button>Pure Veg</button>
        <button>Bestseller</button>
      </div>
      <div className="flex my-4 text-xl p-4 border border-gray-400 rounded-xl">
        <div>
          <p>VEG symbol</p>
          <p className="font-bold">
            strawberry icecream with cheese cke sundae
          </p>
          <p className="font-bold">295</p>
          <p>ice cream description...</p>
        </div>
        <div className="relative w-[280px] h-[180px] border rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1893566/pexels-photo-1893566.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Cuisine img"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-3 font-semibold rounded bg-orange-600 text-gray-50">
            Add
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}
