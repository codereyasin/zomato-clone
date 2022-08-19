import React from "react";
import { AiFillCaretRight } from 'react-icons/ai';
import Slider from "react-slick";
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow />,
};

const Colloction = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </div>
          <div className="collection-location">
            <div>All Collections in Lucknow </div>
           <AiFillCaretRight className="absolute-center"/>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img src={item.cover} className="collection-image"  alt={item.title} />
              <div className="gradient-bg"></div>
              <div className="collection-crad-title">{item?.title}</div>
              <div className="collection-crad-subtitle">
                <div>{item.places}</div>
           <AiFillCaretRight className="absolute-center"/>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Colloction;
