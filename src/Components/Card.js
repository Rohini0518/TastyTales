import {RES_IMG} from "../utils/constants";

const Card = ({ resData }) => {
  return (
    <>
      <div className="m-2 border w-[300px] p-4 rounded-md hover:border-blue-300">
        <div>
          <img
            className="w-[280px] h-[180px]  border rounded-xl"
            src={
              RES_IMG +
              resData.info.cloudinaryImageId
            }
            alt="res-image"
          ></img>
          <h2 className=" text-xl font-bold">{resData.info.name}{resData.info.sla.deliveryTime}</h2>
          <p className="font-semibold">
            {`Rating ${resData.info.avgRatingString} • ${resData.info.sla.slaString}`}
          </p>
          <p className="flex-wrap">{resData.info.cuisines.join("|")}</p>
          <p>{resData.info.areaName}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
