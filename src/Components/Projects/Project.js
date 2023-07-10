import React, { useRef } from "react";
import "./Project.css";
import Arrow from "./Arrow";
import ArrowRight from "./ArrowRight";
import img1 from "./img1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "penthouse",
    location: "chennai, college road",
  },
  {
    name: "Vintage villa",
    location: "chennai, college road",
  },
  {
    name: "Tonga house",
    location: "chennai, college road",
  },
  {
    name: "Tonga house",
    location: "chennai, college road",
  },
  {
    name: "Tonga house",
    location: "chennai, college road",
  },
];

const Project = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef();
  return (
    <div className="project_main">
      <div>
        <div className="project_main1">Ongoing Projects</div>

        <div className="flex_between">
          <div className="project_submenu">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </div>
          <div style={{ display: "flex" }}>
            <Arrow
              onClick={() => sliderRef.current.slickPrev()}
              style={{ cursor: "pointer" }}
            />
            <ArrowRight
              onClick={() => sliderRef.current.slickNext()}
              style={{ cursor: "pointer", marginLeft: "20px" }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="image_container">
          <Slider {...settings} ref={sliderRef}>
            {data.map((i, ind) => (
              <div key={ind} className="imageWrapper">
                <img src={img1} alt="image1" />
                <div className="card_wrapper">
                  <div className="card">
                    <div className="title">{i.name}</div>
                    <div className="location">{i.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
