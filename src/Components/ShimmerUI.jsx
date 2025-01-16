import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 m-2 p-4">
      {Array.from({ length: 20 }, (_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerUI;