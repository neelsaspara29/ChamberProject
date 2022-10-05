import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
      <div className="w-4/5 m-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-10"
        >
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "300px" }}>
              {" "}
              <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Galleries;
