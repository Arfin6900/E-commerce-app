import React from "react";
import { Carousel } from "react-responsive-carousel";

const Imagecarousel = () => {
  return (
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src="hero-2-img1.webp" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="hero-2-img2.webp" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="hero-2-img3.webp" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="hero-2-img1.webp" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="hero-2-img2.webp" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="hero-2-img3.webp" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
  );
};

export default Imagecarousel;
