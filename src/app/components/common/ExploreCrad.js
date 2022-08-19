import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const ExploreCrad = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImage = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const Offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = Offers.length > 1 ? Offers[0].text : null;
  const discount =
    Offers.length > 1
      ? Offers[1].text
      : Offers.length === 1
      ? Offers[0].text
      : null;

  return (
    <div className="explore-crad cur-po">
      <div className="explore-card-cover">
        <img src={coverImage} alt={name} className="explore-crad-image" />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount-off">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating}
            <AiOutlineStar className="absolute-center" />
          </div>
        )}
      </div>
      <div className="res-row">
        {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {item} {i !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )}
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="crad-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              style={{ height: "18px" }}
              alt={bottomContainers[0]?.text}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCrad;
