import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

function Courusel({ cdata }) {
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
              style={{ width: "49px", height: "49px", borderRadius: "50%" }}
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
          {cdata?.map((single) => (
            <Carousel.Item className="h-100">
              <img className="d-block w-100" src={single} alt="First slide" />
              {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          ))}
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
              About Us
              <ul className="">
                <li className="item1 ">
                  <Link className="first " to="/about">
                    SCCI At a Glance
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/mission">
                    Visson&nbsp;&&nbsp;Mission
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
                    Office Bearers
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/executivecommittee">
                    Executive committee
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/pastpresident">
                    Past President
                  </Link>
                </li>
                <li className="item1">
                  <Link className="first" to="/comiteemain">
                    Working committees
                  </Link>
                </li>
                <li className="item1">
                  <Link
                    onclick={handleClose}
                    className="first "
                    to="/secretaries"
                  >
                    Secretariat
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
            <li className="item6 ">
              Events
              <ul className="">
                <li className="item1">
                  <Link
                    className="first"
                    to="/upcomingevents"
                    onclick={handleClose}
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/pastevents" onclick={handleClose}>
                    Past Events
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item4 ">
              Publications
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
                  <Link to="/otherpublication">Other Publications </Link>
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
              GOVT. Circulares
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/statecirculer">
                    State Govt. Circulares
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/govcirculer">Central Govt. Circulares</Link>
                </li>
              </ul>
            </li>

            <li className="item7 shine bg-blue-500 membership_renewal text-blue-100">
              Membership Renewal
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Courusel 