import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomerCard from "./CustomerCard";
import { Navigation } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function HappyCustomers() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 1,
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co...",
    },
    {
      name: "Alex K.",
      rating: 3,
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co...",
    },
    {
      name: "James L.",
      rating: 5,
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
    },
    {
      name: "James L.",
      rating: 4,
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
    },
    {
      name: "James L.",
      rating: 2,
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
    },
    {
      name: "James L.",
      rating: 2,
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
    },
    {
      name: "James L.",
      rating: 2,
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co...",
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>

          <div className="slider-arrows">
            <FaArrowLeft ref={prevRef} className="arrow" />
            <FaArrowRight ref={nextRef} className="arrow" />
          </div>
        </div>
      </div>
      <section className="customers-section">
        <Swiper
          modules={[Navigation]}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={20}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={true}
          className="customers-swiper"
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={index} style={{ width: "400px" }}>
              <CustomerCard {...rev} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default HappyCustomers;
