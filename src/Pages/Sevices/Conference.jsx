import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Table } from "react-bootstrap";

function Conference() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      <div className="w-2/3 m-auto mt-4">
        <div>
          <h2 className="text-center text-danger uppercase">conference</h2>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            consectetur ipsam deserunt, neque rem molestiae alias reiciendis
            placeat magni.
          </p>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper mt-10"
            >
              {data.map((data) => (
                <SwiperSlide>
                  <div style={{ width: "200px", height: "200px" }}>
                    <img alt="Anita Simmons" src="/Assets/Gallery/1.jpg" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="text-center p-4">
          <h4 className="uppercase">About conference</h4>
        </div>
        <div>
          <Table striped bordered hover>
            <thead></thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>SCCI Auditorium</td>
              </tr>
              <tr>
                <td>Since</td>
                <td>1990</td>
              </tr>
              <tr>
                <td>Dimentions</td>
                <td>30x40x35 (D x W x H)(feet)</td>
              </tr>
              <tr>
                <td>Capecity:</td>
                <td>1000 People</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>30000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Conference;
