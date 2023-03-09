import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";
import Carousel from "react-bootstrap/Carousel";
import Header1 from "../../Components/Header/Header1";

function Dinninghall() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/service/get", {
      type: 2,
    })
      .then((data) => {
        console.log("res-", data);
        setData(data?.data?.data);
      })
      .catch((err) => console.log("err", err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [data1, setData1] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      <Header1 />
      <div className="slider  relative ">
        <Carousel pause="hover" indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"/Assets/Dinning/1.jpg"}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className=" mt-2 ">
        <div>
          <h2 className=" w-2/3 m-auto text-center text-danger title2 uppercase">
            Dinning Hall
          </h2>
        </div>
        <div
          className="w-2/3 m-auto mt-3 pub"
          style={{ fontSize: "16px", textAlign: "justify" }}
        >
          <p className="text-center">{data[0]?.intro}</p>
        </div>

        <div className="w-2/3 m-auto text-center p-2">
          <h4 className="">Information</h4>
        </div>
        <div className="w-2/3 m-auto table_responsive pub">
          {/* <Table striped bordered hover className="m-auto">
            <thead></thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>SCCI Auditorium</td>
              </tr>
              <tr>
                <td>Fecilities</td>
                <td>
                  {data[0]?.facilities.map((single) => {
                    return (
                      <span className="bg-orange-400 text-white mr-1 p-1.5">
                        {single}
                      </span>
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
                <td>500 People</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td>{data[0]?.rent}&#8377;</td>
              </tr>
            </tbody>
          </Table> */}
          <table>
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr>
                <th scope="col">Facilities</th>
                <th scope="col">Capacity</th>
                <th scope="col">Rent</th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Facilities">
                  {/* {data[0]?.facilities.map((item) => (
                    <span>{item},&nbsp;</span>
                  ))} */}
                  <ul>
                    <li>Kitchen Area</li>
                    <li>4 Tables </li>
                    {/* <li>Buffet  Area</li> */}
                  </ul>
                </td>
                <td data-label="Capacity">60 Person at a Time </td>
                <td data-label="Rent">&#8377;{data[0]?.rent}/day</td>
              </tr>
            </tbody>
          </table>
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

export default Dinninghall;
