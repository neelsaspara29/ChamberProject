import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

function Courusel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="absolute d-flex justify-between align-items-center w-3/4 left-10 top-1 home_header_responsive "
        style={{ zIndex: "1000", visibility: "hidden" }}
      >
        <div className="h-1/5">
          <div>
            <img
              src="/Assets/sccilogo.png"
              alt="SCCI"
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              className="bg-transparent inline"
              srcset=""
            />
          </div>
        </div>
        <div>
          <div className="mobile_responsivee">
            <div onClick={handleShow}>
              <div className="mobile_res_toggle"></div>
              <div className="mobile_res_toggle"></div>
              <div className="mobile_res_toggle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider  relative">
        <Carousel pause="hover" indicators={false}>
          <Carousel.Item className="h-100">
            <img
              className="d-block w-100"
              src="/Assets/Slider/fourth.jpg"
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
              src="/Assets/Slider/fifth.jpg"
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
              src="/Assets/Slider/sixth.jpg"
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
              src="/Assets/Slider/third.jpg"
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
              src="/Assets/Slider/second.jpg"
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
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "black" }}>
            SAURASHTRA CHAMBER OF COMMERCE & INDUSTRY - BHAVNAGAR
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="main_menu main_menu_responsive uppercase">
            <li className="item1 ">
              About
              <ul className="">
                <li className="item1 ">
                  <Link className="first " to="/about">
                    SCCI At 4 Glance
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/mission">
                    Visson&Mission
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/messageChairman">
                    Message From the Chair
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/bhavnagar">
                    About Bhavnagar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item2 ">
              SCCI Team
              <ul className="">
                <li className="item1 ">
                  <Link className="first " to="/officebearear">
                    Office Bearear
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/executiveCommitee">
                    Executive Commitee
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/secretaries">
                    Secretaries
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item3">
              Services & Facilities
              <ul className="">
                <li className="item1 ">
                  <Link className="first " to="/certificateoforigin">
                    Certificate of origin
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/visarecomandation">
                    Visa Recomandation
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/auditorium">
                    Auditorium
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/conference">
                    Conference Hall
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item4 ">
              Publication
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/bulletin">
                    Bio-monthly Bulletin
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/industrialdirectory">Industrial Directory</Link>
                </li>
                <li className="item3">
                  <Link to="/otherpublication">Other Publication </Link>
                </li>
              </ul>
            </li>
            <li className="item5 ">
              Coo Helpdesk
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/aboutcoo">
                    About Coo
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/procedure">Procedure of coo</Link>
                </li>
              </ul>
            </li>
            <li className="item6 ">
              GOVT. Cercullers
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/statecirculer">
                    State Govt. Cercullers
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/govcirculer">Central Govt. Cercullers</Link>
                </li>
              </ul>
            </li>
            <li className="item7 ">
              Various Comitees
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/comiteemain">
                    Commitees
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item7 ">
              Members Directory
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/membersdirectory">
                    Members
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Courusel 