import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../Styles/Components/gallery.scss";
import vd1 from "../../Helper/video/vd1.mp4";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";
import { BiShowAlt } from "react-icons/bi";
function Galleries() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(-1);
  const fetchData = async () => {
    await ApiPost("/gallaryEvent/get")
      .then((data) => {
        console.log("res-", data);
        let dt = data?.data?.data;
        for (let i = 0; i < dt.length; i++) {
          dt[i].videos = dt[i].videos.map((item) =>
            item.replace("watch?v=", "embed/")
          );
        }
        // data?.data?.data?.map((single,idx) => {
        //   data?.data?.data[idx].videos= single.videos.map((item) =>  item.replace("watch?v=","embed/"));

        // });
        console.log(dt);
        setData(dt);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header1 />
      <h1 className="my-5 text-danger uppercase text-center title2">gallery</h1>
      <div className="w-4/5 text-center mx-auto mt-4">
        <div>
          <table className="gallery_responsive">
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr>
                <th scope="col">Event </th>
                <th scope="col">Deep Dive In Event</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <BiShowAlt
                      className="inline text-center text-3xl cursor-pointer text-blue-500"
                      onClick={() => setId(idx)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {id >= 0 && data[id] && (
        <h3 className="text-center mt-5 uppercase">Vedio Gallery</h3>
      )}
      <div className="w-4/5 vedio_display d-flex flex-wrap mx-auto mt-2 justify-center overflow-x-scroll">
        {id >= 0 &&
          data[id] &&
          data[id].videos.map((single) => (
            <div>
              <iframe
                src={single}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />{" "}
            </div>
          ))}
      </div>
      {id >= 0 && data[id] && (
        <h3 className="text-center mt-12 uppercase">Picture Gallery</h3>
      )}
      <div className="w-4/5 image_display flex-wrap d-flex mx-auto mt-2 justify-center overflow-x-scroll">
        {id >= 0 &&
          data[id] &&
          data[id].images.map((single) => (
            <>
              <div className="img_o">
                <img src={single} width={250} height={250} alt="" />
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Galleries;
