import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating } = resData.info;

  return (
    <div className="res-card">
      <img width="100%" src={CDN_LINK + cloudinaryImageId} />
      <h3 style={{ textTransform: "uppercase" }}>{name}</h3>
      <p>{avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
