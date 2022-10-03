import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";

function Conference() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/service/get", {
      type: "0",
    })
      .then((data) => {
        console.log("res-", data);
        setData(data?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [data1, setData1] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      <div className=" mt-4">
        <div className="w-2/3 m-auto ">
          <h2 className="text-center text-danger uppercase">Conference hall</h2>
        </div>
        <div className=" w-2/3 m-auto  mt-5">
          <p>{data[0]?.intro}</p>
          <div>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper mt-10"
              breakpoints={{
                100: {
                  width: 100,
                  slidesPerView: 1,
                },
                160: {
                  width: 160,
                  slidesPerView: 1,
                },
                300: {
                  width: 300,
                  slidesPerView: 1,
                },
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
              }}
            >
              {data1.map((single) => (
                <SwiperSlide>
                  <div style={{ width: "200px", height: "200px" }}>
                    <img alt="Anita Simmons" src={data[0]?.image} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className=" w-2/3 m-auto  text-center p-4 ">
          <h4 className="uppercase">About Conference</h4>
        </div>
        <div className="w-2/3 m-auto table_responsive">
          <Table striped bordered hover>
            <thead></thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>SCCI Conference</td>
              </tr>
              <tr>
                <td>Fecilities</td>
                <td>
                  {data[0]?.facilities.map((single) => {
                    return (
                      <span className="bg-orange-400 mr-1 p-1.5">{single}</span>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <td>Dimentions</td>
                <td>30x40x35 (D x W x H)(feet)</td>
              </tr>
              <tr>
                <td>Capecity:</td>
                <td>50 People</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>{data[0]?.rent}&#8377;</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* <div className="d-flex justify-center mt-4 w-100">
          <div>
            <p>Name:</p>
            <p>Since:</p>
            <p>Dimentions:</p>
            <p>Capecity:</p>
            <p>Price</p>
          </div>
          <div>
            <p> SCCI Auditorium</p>
            <p>1990</p>
            <p>30x40x35 (D x W x H)(feet)</p>
            <p>1000 People</p>
            <p>30000</p>
          </div>
          <div></div>
        </div> */}
      </div>
    </>
  );
}

export default Conference;
