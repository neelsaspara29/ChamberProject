import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function Logocourosel() {
  return (
    <>
      <div className="w-4/5 mx-auto mt-7">
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            540: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              className="d-block w-50 h-50 my-auto"
              src={"/Assets/logo_courosol/aaaci-logo.png"}
              alt="Third slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="d-block w-50 h-100 my-auto"
              src={"/Assets/logo_courosol/ficci.png"}
              alt="Third slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="d-block w-50 h-50"
              src={"/Assets/logo_courosol/gcci.png"}
              alt="Third slide"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Logocourosel;
