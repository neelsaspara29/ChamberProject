import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Courusel from "../../Components/Homepage/Courusel";
import Events from "../../Components/Homepage/Events";
import Gallery from "../../Components/Homepage/Gallery";
import Membership from "../../Components/Homepage/Membership";
import Services from "../../Components/Homepage/Services";
import Team from "../../Components/Homepage/Team";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Logocourosel from "../../Components/Homepage/Logocourosel";
import { ApiGet } from "../../Helper/API/Apidata";

function Home() {
  const [cdata, setCdata] = useState([]);
  const [advData, setAdvData] = useState([]);

  const fetchData = async (page, limit) => {
    await ApiGet("/adv_main/get", {
      page: page,
      limit: limit,
    })
      .then((data) => {
        console.log("res-", data.data);
        setCdata(data?.data?.data[0]?.main_images);
        setAdvData(data?.data?.data[0]?.adv_images);
        console.log(data?.data?.data[0]?.adv_images);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(1, 10);
  }, []);
  return (
    <>
      <Courusel cdata={cdata} />
      <Events />
      <div
        className="w-11/12 pub mx-auto  lg:px-8 lg:pt-10 flow-root my-4 pub1"
        style={{ height: "48em" }}
      >
        {/* <Gallery /> */}
        <Swiper
          // install Swiper modules
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {advData?.map((single) => (
            <SwiperSlide>
              <img className="d-block w-100" src={single} alt="Third slide" />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>

      <Membership />
      {/* <Services />   */}
      <Logocourosel />
    </>
  );
}

export default Home;
