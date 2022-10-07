import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Carousel } from "react-bootstrap";

function Logocourosel() {
  return (
    <>
      <Carousel
        pause="hover"
        style={{ width: "30%", height: "30% !important" }}
        indicators={false}
        className="mx-auto"
        dura
      >
        <Carousel.Item>
          <img
            className="d-block "
            width={100}
            height={100}
            src={"/Assets/logo_courosol/aaaci-logo.png"}
            alt="First slide"
          />
          {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            width={100}
            height={100}
            src={"/Assets/logo_courosol/ficci.png"}
            alt="Second slide"
          />

          {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={"/Assets/logo_courosol/gcci.png"}
            alt="Third slide"
            width={100}
            height={100}
          />

          {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Logocourosel;
