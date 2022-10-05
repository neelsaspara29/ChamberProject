import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/Components/gallery.scss";
import vd1 from "../../Helper/video/vd1.mp4";
import Header1 from "../../Components/Header/Header1";
function Galleries() {
  const data = [1, 2, 3, 4];
  return (
    <>
      <Header1 />
      <div className="w-4/5 text-center m-auto">
        <Carousel indicators={false} interval={null}>
          {data.map((single) => {
            return (
              <Carousel.Item key={single}>
                <ReactPlayer
                  url={vd1}
                  pip={true}
                  controls={true}
                  playing={true}
                  width="100%"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div className="w-4/5 mx-auto mt-5">
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
              className="d-block w-100"
              src={
                "https://t4.ftcdn.net/jpg/02/30/80/55/240_F_230805549_zIJjS9BaESGVXlTMEihQlbp2hlCfHiR7.jpg"
              }
              alt="Third slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="d-block w-100"
              src={
                "https://media.istockphoto.com/photos/stage-mock-up-3d-rendering-empty-wall-screen-template-picture-id889218716?k=20&m=889218716&s=612x612&w=0&h=4eiLQFLDUzXmcC0uwi5JP-6YashlAw7KeAM95wYGXJ8="
              }
              alt="Third slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="d-block w-100"
              src={"https://images7.alphacoders.com/693/thumb-1920-693484.jpg"}
              alt="Third slide"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="d-block w-100"
              src={
                "https://media.istockphoto.com/photos/empty-red-armchairs-of-a-theater-ready-for-a-show-picture-id1295114854?b=1&k=20&m=1295114854&s=170667a&w=0&h=W9ZbN674554Jsamxo5AfoO3DrSm_7qYS1EnANgusi9o="
              }
              alt="First slide"
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </>
  );
}

export default Galleries;
