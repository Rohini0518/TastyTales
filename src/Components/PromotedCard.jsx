const PromotedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <div className="absolute rounded-lg bg-orange-500 text-white ml-2 p-1">
          Quick
        </div>
        <Card {...props} />
      </div>
    );
  };
};

export default PromotedCard;