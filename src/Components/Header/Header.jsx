import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();
  return (
    <>
      <div id="header">
        <div className="wrapper">
          <Link id="logo" to="/">
            <img src="/Assets/logo9.png" alt="" />
          </Link>
          <div id="main_menu">
            <ul className="main_menu">
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
                    <Link
                      to="/procedure"
                    >
                      Procedure of coo
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="item6 ">
                GOVT. Cercullers
                <ul className="">
                  <li className="item1">
                    <Link
                      className="first"
                      to="/statecirculer"
                    >
                      State Govt. Cercullers
                    </Link>
                  </li>
                  <li className="item2">
                    <Link
                      to="/govcirculer"
                    >
                      Central Govt. Cercullers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="item7 ">
                Various Comitees
                <ul className="">
                  <li className="item1">
                    <Link
                      className="first"
                      to="/comiteemain"
                    >
                      Commitees
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="item7 ">
              Members Directory
                <ul className="">
                  <li className="item1">
                    <Link
                      className="first"
                      to="/membersdirectory"
                    >
                      Members 
                    </Link>
                  </li>
                </ul>
              </li> */}
             
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

          {/* <!-- mobile menu section --> */}
          {/* <div id="menu_toggle">
        <span className="fa fa-bars"></span>
      </div> */}

          {/* <!-- end of mobile menu --> */}
        </div>
      </div>
    </>
  );
}
 
export default Header;
