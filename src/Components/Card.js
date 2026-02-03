import React from "react";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {};

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-slate-200">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Delivery Time Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-lg flex items-center gap-1">
          <span>🕒</span>
          {sla?.deliveryTime || sla?.slaString || "30"} mins
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Restaurant Name */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-sm text-slate-600 mb-3 line-clamp-1">
          {cuisines?.join(", ")}
        </p>

        {/* Rating and Cost */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                avgRating >= 4.0
                  ? "bg-green-100 text-green-700"
                  : avgRating >= 3.5
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <span>⭐</span>
              {avgRating || "4.0"}
            </div>
          </div>

          {/* Cost */}
          <div className="text-sm font-semibold text-slate-700">
            {costForTwo || "₹300 for two"}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Card;