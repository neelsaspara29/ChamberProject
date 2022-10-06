import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

const About = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    await ApiGet("/aboutus/get")
      .then((data) => {
        console.log("res", data.data.data);
        setData(data?.data?.data[0]?.text);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header1 />
      <div id="interior_content">
        <div
          id="interior_header_banner"
          style={{
            background:
              "background: url('" +
              "/Assets/about/fs_453.jpg" +
              "') 50% 50% no-repeat; background-size: cover;",
          }}
        >
          <span id="bnrinst_2_453">
            <img
              src="/Assets/about/fs_453.jpg"
              alt="Hello"
              width="1439"
              height="363"
            />
          </span>
        </div>
        <div class="wrapper">
          <div id="content" class="rightpad">
            <h1 class="gendocsPageTitle text-center text-danger title2">
              SCCI AT A GLANCE
            </h1>
            <p className="text-center">{data} </p>
          </div>
          <div className="slider ">
            <Carousel pause="hover" indicators={false}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={
                    "https://media.istockphoto.com/photos/empty-red-armchairs-of-a-theater-ready-for-a-show-picture-id1295114854?b=1&k=20&m=1295114854&s=170667a&w=0&h=W9ZbN674554Jsamxo5AfoO3DrSm_7qYS1EnANgusi9o="
                  }
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
                  src={
                    "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcml1bXxlbnwwfHwwfHw%3D&w=1000&q=80"
                  }
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
                  src={
                    "https://images7.alphacoders.com/693/thumb-1920-693484.jpg"
                  }
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
                  src={
                    "https://media.istockphoto.com/photos/stage-mock-up-3d-rendering-empty-wall-screen-template-picture-id889218716?k=20&m=889218716&s=612x612&w=0&h=4eiLQFLDUzXmcC0uwi5JP-6YashlAw7KeAM95wYGXJ8="
                  }
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
                  src={
                    "https://t4.ftcdn.net/jpg/02/30/80/55/240_F_230805549_zIJjS9BaESGVXlTMEihQlbp2hlCfHiR7.jpg"
                  }
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
        </div>
      </div>
    </>
  );
};

export default About;
