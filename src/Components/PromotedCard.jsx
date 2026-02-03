import React from "react";

const PromotedCard = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute -top-2 -left-2 z-10">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 py-1.5 rounded-lg shadow-lg text-xs font-bold uppercase  flex items-center gap-1 ">
            <span className="text-sm">⚡</span>
            Fast Delivery
          </div>
        </div>

        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-50 "></div>

        <div className="relative">
          <Card {...props} />
        </div>
      </div>
    );
  };
};

export default PromotedCard;