import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";
import Carousel from 'react-bootstrap/Carousel';


function Auditoriam() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/service/get", {
      type: "1",
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
    <div className="slider ">
        <Carousel pause="hover" indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://media.istockphoto.com/photos/empty-red-armchairs-of-a-theater-ready-for-a-show-picture-id1295114854?b=1&k=20&m=1295114854&s=170667a&w=0&h=W9ZbN674554Jsamxo5AfoO3DrSm_7qYS1EnANgusi9o="}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHw%3D&w=1000&q=80"}
              alt="Second slide"
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://images7.alphacoders.com/693/thumb-1920-693484.jpg"}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://media.istockphoto.com/photos/stage-mock-up-3d-rendering-empty-wall-screen-template-picture-id889218716?k=20&m=889218716&s=612x612&w=0&h=4eiLQFLDUzXmcC0uwi5JP-6YashlAw7KeAM95wYGXJ8="}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://t4.ftcdn.net/jpg/02/30/80/55/240_F_230805549_zIJjS9BaESGVXlTMEihQlbp2hlCfHiR7.jpg"}
              alt="Third slide"
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
      <div className=" mt-4 ">
      <div>
          <h2 className=" w-2/3 m-auto text-center text-danger">Introduction</h2>
        </div>
        <div className="w-2/3 m-auto mt-5 pub">
          <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
          
        </div>
        
        <div className="w-2/3 m-auto text-center p-4">
          <h4 className="uppercase">About Auditorium</h4>
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
    
      <th scope="col">Fecilities</th>
      <th scope="col">Capacity</th>
      <th scope="col">Rent</th>
      {/* <th scope="col"></th> */}
    </tr>
  </thead>
  <tbody>
  
        <tr>
       
                
                  <td data-label = "Facilities">Ac, Water</td>
                  <td data-label = "Capacity">30,000</td>
                  <td data-label = "Rent">30,000</td>
                  
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

export default Auditoriam;
