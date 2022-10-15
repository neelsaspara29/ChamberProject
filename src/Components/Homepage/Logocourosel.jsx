import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Carousel } from "react-bootstrap";

function Logocourosel() {
  return (
    <>
      <div className="mt-20 text-danger text-center">
        {window.innerWidth < 500 ? (
          <small className="capitalize">
            SCCI associated with leading business organizations
          </small>
        ) : (
          <h6 className="text-red-900 text-center uppercase">
            SCCI associated with leading business organizations
          </h6>
        )}
      </div>
      {/* <Swiper
        // install Swiper modules

        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={25}
        // loop={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 300,
            slidesPerView: 2,
          },
          540: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            height: 180,
            width: 600,
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mx-auto mt-5"
        style={{ width: "85%" }}
      >
        <SwiperSlide className="my-auto">
          {" "}
          <img
            className="d-block"
            src={"/Assets/logo_courosol/gcci1.png"}
            alt="Third slide"
          />
        </SwiperSlide>
        <SwiperSlide className="my-auto">
          <img
            className="d-block "
            src={"/Assets/logo_courosol/aaaci.png"}
            alt="Third slide"
          />
        </SwiperSlide>
        <SwiperSlide className="my-auto">
          <img
            className="d-block "
            style={{ height: "155px" }}
            src={"/Assets/logo_courosol/ficci1.png"}
            alt="Third slide"
          />
        </SwiperSlide>
      </Swiper> */}
      <div
        className={`${
          window.innerWidth < 500 ? " w-5/6" : "w-5/6"
        } mt-6 mx-auto`}
      >
        <div className="d-flex gap-2 justify-around align-item-center">
          <div>
            <img src="/Assets/logo_courosol/aaaci.png" width={150} alt="" />
          </div>
          <div className="my-auto">
            <img src="/Assets/logo_courosol/ficci.png" width={200} alt="" />
          </div>
          <div>
            <img src="/Assets/logo_courosol/gcci.png" width={150} alt="" />
          </div>
        </div>
      </div>
      {/* <Carousel
        pause="hover"
        indicators={false}
        className="mx-auto bg-gray-500"
        dura
      >
        <Carousel.Item>
          <img
            className="d-block "
            src={"/Assets/logo_courosol/aaaci.png"}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={"/Assets/logo_courosol/ficci1.png"}
            alt="Second slide"
          />

      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={"/Assets/logo_courosol/gcci1.png"}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel> */}
    </>
  );
}

export default Logocourosel;
