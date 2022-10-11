import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="header" className="header1" style={{ display: "none" }}>
        <div className="wrapper">
          <div>
            <Link id="logo" to="/">
              <img
                src="/Assets/sccilogo.png"
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
            </Link>
          </div>
          <div id="main_menu">
            <ul className="main_menu">
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
                      vision&Mission
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
                  <li className="item1 ">
                    <Link className="first " to="/sccitrust">
                      saurashtra chamber trust
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
                  <li className="item1 ">
                    <Link className="first " to="/secretaries">
                      Secretariat
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

              <li className="item7 cursor-pointer ">Membership Renewal</li>
            </ul>
          </div>
          <div id="has_it_logo"></div>
          <div id="social_header">
            <Link
              className="facebook"
              to="https://www.facebook.com/ftlchamber/"
              target="_blank"
            >
              <span className="fa fa-facebook"></span>
            </Link>
            <Link
              className="twitter"
              to="https://twitter.com/ftlchamber"
              target="_blank"
            >
              <span className="fa fa-twitter"></span>
            </Link>
            <Link
              className="linkedin"
              to="https://www.linkedin.com/groups/855347"
              target="_blank"
            >
              <span className="fa fa-linkedin"></span>
            </Link>
            <Link
              className="instagram"
              to="https://www.instagram.com/ftlchamber/"
              target="_blank"
            >
              <span className="fa fa-instagram"></span>
            </Link>
            <Link
              className="youtube"
              to="https://www.youtube.com/channel/UC6poMQbbx9lT8ltWGlRU2eA?view_as=subscriber"
            >
              <span className="fa fa-youtube"></span>
            </Link>
          </div>
          <div className="mobile_responsive absolute right-12 top-28  ">
            <div onClick={handleShow}>
              <div className="mobile_res_toggle"></div>
              <div className="mobile_res_toggle"></div>
              <div className="mobile_res_toggle"></div>
            </div>
          </div>
          {/* <!-- mobile menu section --> */}
          {/* <div id="menu_toggle">
        <span className="fa fa-bars"></span>
      </div> */}

          {/* <!-- end of mobile menu --> */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Link to="/">
                  SAURASHTRA CHAMBER OF COMMERCE & INDUSTRY - BHAVNAGAR{" "}
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="main_menu main_menu_responsive uppercase">
                <li className="item1 ">
                  About Us
                  <ul className="">
                    <li className="item1 " onclick={handleClose}>
                      <Link className="first " to="/about">
                        <span onclick={() => handleClose()}>
                          <h6> SCCI At a Glance</h6>
                        </span>
                      </Link>
                    </li>
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/mission"
                      >
                        <h6> vision & Mission</h6>
                      </Link>
                    </li>
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/messageChairman"
                      >
                        <h6> Message From the Chair</h6>
                      </Link>
                    </li>
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/bhavnagar"
                      >
                        <h6> About Bhavnagar</h6>
                      </Link>
                    </li>
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/sccitrust"
                      >
                        <h6> saurashtra chamber trust</h6>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="item2 ">
                  SCCI Team
                  <ul className="">
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/officebearear"
                      >
                        <h6> Office Bearers</h6>
                      </Link>
                    </li>
                    <li className="item2">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/executivecommittee"
                      >
                        <h6> Executive committee</h6>
                      </Link>
                    </li>
                    <li className="item2">
                      <Link className="first " to="/pastpresident">
                        <h6> Past President</h6>
                      </Link>
                    </li>
                    <li className="item1">
                      <Link className="first " to="/comiteemain">
                        <h6> Working committees</h6>
                      </Link>
                    </li>
                    <li className="item1 ">
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
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/certificateoforigin"
                      >
                        <h6> Certificate of origin</h6>
                      </Link>
                    </li>
                    <li className="item2">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/visarecomandation"
                      >
                        <h6> Visa Recomandation</h6>
                      </Link>
                    </li>
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/auditorium"
                      >
                        <h6> Auditorium</h6>
                      </Link>
                    </li>
                    <li className="item1 ">
                      <Link
                        onclick={handleClose}
                        className="first "
                        to="/conference"
                      >
                        <h6> Conference Hall</h6>
                      </Link>
                    </li>
                    <li className="item1">
                      <Link
                        onclick={handleClose}
                        className="first"
                        to="/jobportal"
                      >
                        <h6> Job Portal</h6>
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
                      <Link
                        onclick={handleClose}
                        className="first"
                        to="/bulletin"
                      >
                        <h6> Bio-monthly Bulletin</h6>
                      </Link>
                    </li>
                    <li className="item2">
                      <Link onclick={handleClose} to="/industrialdirectory">
                        <h6> Industrial Directory</h6>
                      </Link>
                    </li>
                    <li className="item3">
                      <Link onclick={handleClose} to="/otherpublication">
                        <h6> Other Publications </h6>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="item5 ">
                  Coo Helpdesk
                  <ul className="">
                    <li className="item1">
                      <Link
                        onclick={handleClose}
                        className="first"
                        to="/aboutcoo"
                      >
                        <h6> About Coo</h6>
                      </Link>
                    </li>
                    <li className="item2">
                      <Link onclick={handleClose} to="/procedure">
                        <h6> Procedure of coo</h6>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="item6 ">
                  GOVT. circulars
                  <ul className="">
                    <li className="item1">
                      <Link
                        onclick={handleClose}
                        className="first"
                        to="/statecirculer"
                      >
                        <h6> State Govt. circulars</h6>
                      </Link>
                    </li>
                    <li className="item2">
                      <Link onclick={handleClose} to="/govcirculer">
                        <h6> Central Govt. circulars</h6>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="item7 bg-blue-500 membership_renewal ">
                  Membership Renewal
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}

export default Header1;
