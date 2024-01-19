/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataTestimonial } from "jsonData/testimonialList";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Testimonial = () => {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };

  const prev = () => {
    slider.current.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: "29%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "2%",
        },
      },
    ],
  };
  return (
    <div
      className="w-full py-14 text-center dark:bg-gray-700 dark:text-white lg:text-left"
      id="testi"
    >
      <div className="">
        <div className="mt-6 text-center font-bold">
          <h2 className="text-3xl">Testimonial</h2>
          <p className="mt-2 mb-6">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <Slider ref={slider} {...settings}>
          {dataTestimonial.map((item) => (
            <div className="flex items-center justify-center">
              <div
                key={item.id}
                className="m-5 flex w-11/12 flex-col items-center gap-4 rounded-lg bg-blue-50 p-5 py-10 hover:bg-blue-100 dark:bg-gray-800 lg:flex-row"
              >
                <div className="lg:w-full">
                  <img src={`assets/img/${item.profile}`} alt="" />
                </div>
                <div>
                  <div className="rating mb-3 flex justify-center lg:justify-start">
                    {Array.from(Array(5), (i) => (
                      <img
                        key={i}
                        src={`assets/img/icons/${item.rating}`}
                        alt=""
                        className="w-6"
                      />
                    ))}
                  </div>
                  <p className="font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-3 text-gray-500 dark:text-gray-400">
                    {item.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-3 flex justify-center gap-5">
          <button
            className="slider-button rounded-full border border-gray-400"
            onClick={prev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="slider-button rounded-full border border-gray-400"
            onClick={next}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
