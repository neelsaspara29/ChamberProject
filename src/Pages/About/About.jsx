import { hover } from "@testing-library/user-event/dist/hover";
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
            <p className="text-justify">{data} </p>
          </div>
          <div className="slider relative ">
            <Carousel indicators={false} pause={"hover"} interval={1500}>
              <Carousel.Item className="border border-1">
                <img
                  style={{ height: "100vh !important" }}
                  className="d-block w-100"
                  src="/Assets/glance/p1.jpg"
                  alt="First slide"
                />
                {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item className="border border-1">
                <img
                  style={{ height: "100vh !important" }}
                  className="d-block w-100"
                  src="/Assets/glance/p2.jpg"
                  alt="Second slide"
                />

                {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item className="border border-1">
                <img
                  style={{ height: "100vh !important" }}
                  className="d-block w-100"
                  src="/Assets/glance/p3.jpg"
                  alt="Third slide"
                />

                {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item className="border border-1">
                <img
                  style={{ minHeight: "100vh !important" }}
                  className="d-block w-100"
                  src="/Assets/glance/p4.jpg"
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
