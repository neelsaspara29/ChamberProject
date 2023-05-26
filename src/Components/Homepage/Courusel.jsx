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
              style={{ width: "55px", height: "50px", borderRadius: "50%" }}
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
                    <h6> SCCI At a Glance</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/mission">
                    <h6> vision&nbsp;&&nbsp;Mission</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/messageChairman">
                    <h6> Message From the Chair</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/bhavnagar">
                    <h6> About Bhavnagar</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/sccitrust">
                    <h6> saurashtra chamber trust</h6>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item2 ">
              SCCI Team
              <ul className="">
                <li className="item1 ">
                  <Link className="first " to="/officebearear">
                    <h6> Office Bearers</h6>
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/executivecommittee">
                    <h6> Executive committee</h6>
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/pastpresident">
                    <h6> Past President</h6>
                  </Link>
                </li>
                <li className="item1">
                  <Link className="first" to="/comiteemain">
                    <h6> Working committees</h6>
                  </Link>
                </li>
                <li className="item1">
                  <Link
                    onclick={handleClose}
                    className="first "
                    to="/secretaries"
                  >
                    <h6> Secretariat</h6>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item3">
              Services & Facilities
              <ul className="">
                <li className="item1 ">
                  <Link className="first " to="/certificateoforigin">
                    <h6> Certificate of origin</h6>
                  </Link>
                </li>
                <li className="item2">
                  <Link className="first " to="/visarecomandation">
                    <h6> Visa Recomandation</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/auditorium">
                    <h6> Auditorium</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/conference">
                    <h6> Conference Hall</h6>
                  </Link>
                </li>
                <li className="item1 ">
                  <Link className="first " to="/dinninghall">
                    <h6> Dinnig Hall</h6>
                  </Link>
                </li>
                <li className="item1">
                  <Link className="first" to="/jobportal">
                    <h6> Placement Services</h6>
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
                    <h6> Upcoming Events</h6>
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/pastevents" onclick={handleClose}>
                    <h6> Past Events</h6>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item4 ">
              Publications
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/bulletin">
                    <h6> Bio-monthly Bulletin</h6>
                  </Link>
                </li>
                <li className="item2">
                  <h6> </h6>
                  <Link to="/industrialdirectory">
                    {" "}
                    <h6>Industrial Directory</h6>
                  </Link>
                </li>
                <li className="item3">
                  <h6> </h6>
                  <Link to="/otherpublication">
                    {" "}
                    <h6>Other Publications </h6>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item5 ">
              Coo Helpdesk
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/aboutcoo">
                    <h6> About Coo</h6>
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/procedure">
                    <h6> Procedure of coo </h6>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item6 ">
              GOVT. Circulares
              <ul className="">
                <li className="item1">
                  <Link className="first" to="/statecirculer">
                    <h6> State Govt. Circulares</h6>
                  </Link>
                </li>
                <li className="item2">
                  <Link to="/govcirculer">
                    <h6> Central Govt. Circulares </h6>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="item7 shine bg-blue-500 membership_renewal text-blue-100">
              Membership Renewal 
              <ul className="">
                <li className="item1 ">
                  <Link
                    onclick={handleClose}
                    className="first "
                    to="/membership"
                  >
                    <h6> Membership</h6>
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