import React from 'react'
import '../../../src/Styles/GallaryPage/index.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
function Gallery() {
  return (
    <>
      <div className="gallery_main">
        <div className="gallery">
          <h2 className="text-danger">
            <b>GALLERY AT GLANCE</b>
          </h2>
        </div>
        <div className="imgageshowcase mt-5">
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

export default Gallery