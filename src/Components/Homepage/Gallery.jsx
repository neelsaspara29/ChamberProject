import React, { useEffect, useState } from "react";
import "../../../src/Styles/GallaryPage/index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ApiPost } from "../../Helper/API/Apidata";
import axios from "axios";
function Gallery() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .post(
        "http://chamber-env.eba-2jmsfvkk.ap-south-1.elasticbeanstalk.com/admin/gallaryEvent/get"
      )
      .then((data) => console.log(data));
    await ApiPost("/gallaryEvent/get")
      .then((data) => {
        console.log("res-", data);
        setData(data?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="gallery_main">
        <div className="gallery">
          <h2 className="text-danger">
            <b>GALLERY AT GLANCE</b>
          </h2>
        </div>
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

      {/* <article class="flow">
  <h1>Our Team</h1>
  <p>Hover or focus over each card to see the person’s job title slide in and the colour treatment change.</p>
  <div class="team">
    <ul class="auto-grid" role="list">
      <li>
        <a href="https://swop.link/cool" target="blank" class="profile">
          <h2 class="profile__name">Anita Simmons</h2>
          <p>Founder</p>
          <img alt="Anita Simmons" src="https://source.unsplash.com/BhcutpohYwg/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target="blank" class="profile">
          <h2 class="profile__name">Celina Harris</h2>
          <p>Creative Director</p>
          <img alt="Profile shot for Celina Harris" src="https://source.unsplash.com/j5KAuRrYX7g/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target="blank" class="profile">
          <h2 class="profile__name">Ruby Morris</h2>
          <p>Technical Lead</p>
          <img alt="Profile shot for Ruby Morris" src="https://source.unsplash.com/pQyIutdScOY/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target="blank" class="profile">
          <h2 class="profile__name">Nicholas Castro</h2>
          <p>Designer</p>
          <img alt="Profile shot for Nicholas Castro" src="https://source.unsplash.com/55JRsxcAiWE/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target="blank" class="profile">
          <h2 class="profile__name">Marc Dixon</h2>
          <p>Developer</p>
          <img alt="Profile shot for Marc Dixon" src="https://source.unsplash.com/5wn6DeAEcmE/800x800" />
        </a>
      </li>
      <li>
        <a href="https://swop.link/cool" target="blank" class="profile">
          <h2 class="profile__name">Chad Chadson</h2>
          <p>Intern</p>
          <img alt="Profile shot for Chad" src="https://source.unsplash.com/7jCYw6a2Wao/800x800" />
        </a>
      </li>
    </ul>
  </div>
</article> */}
    </>
  );
}

export default Gallery;
