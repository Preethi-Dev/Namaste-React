import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating } = resData.info;

  return (
    <div className="w-[400px] p-4 ">
      <img
        className="rounded-md"
        width="100%"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-semibold text-lg mt-4">{name}</h3>
      <p className="text-gray-500">{avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
