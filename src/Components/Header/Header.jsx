import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div className="wrapper">
        <Link id="logo" to="index.php">
          <img src="/Assets/logo9.png" alt="" />
        </Link>
        <div id="main_menu">
          <ul className="main_menu">
            <li className="item1 ">
              <Link className="first " to="pages/about-us/">
                About{" "}
              </Link>
              <ul className="">
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    SCCI At 4 Glance
                  </Link>
                  
                </li>
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Visson&Mission
                  </Link>
                  
                </li>
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Message From the Chair
                  </Link>
                  
                </li>
                </ul>
            </li>
            <li className="item2 ">
              <Link className="" to="pages/benefits-of-joining-the-chamber/">
                SCCI Team
              </Link>
              <ul className="">
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Office Business
                  </Link>
                </li>
                <li className="item2">
                  <Link to="forms/join-the-chamber/">Executive Comitee </Link>
                </li>
                <li className="item3">
                  <Link to="index.php?submenu=manageyourmembership&amp;src=membership&amp;srctype=myaccount">
                    Past President
                  </Link>
                </li>
                <li className="item4">
                  <Link to="footer-logos-redesign/">Secretariat </Link>
                </li>
                <li className="item5">
                  <Link to="index.php?submenu=trustees&amp;src=directory&amp;view=footer_logos&amp;srctype=footer_logos_trustees&amp;displaytype=Redesign_Interior">
                    SCCI Constitution
                  </Link>
                </li>            
              </ul>
            </li>
            <li className="item3">
              <Link to="https://www.ftlchamber.com/index.php?submenu=manageyourmembership&amp;src=membership&amp;srctype=myaccount">
                Services & Facilities
              </Link>
              <ul className="">
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Certificate of origin
                  </Link>
                  
                </li>
                <li className="item2">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Visa Recomandation
                  </Link>
                  
                </li>
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Auditorium
                  </Link>
                  
                </li>
                <li className="item1 ">
                  <Link
                    className="first "
                    to="pages/here-s-how-the-chamber-works-for-you/"
                  >
                    Conference Hall
                  </Link>
                  
                </li>
                </ul>

            </li>
            <li className="item4 ">
              <Link
                className=""
                to="index.php?submenu=events&amp;src=events&amp;srctype=events_lister_new"
              >
                Publication
              </Link>
              <ul className="">
                <li className="item1">
                  <Link
                    className="first"
                    to="index.php?submenu=eventsCalendar&amp;src=events&amp;srctype=events_glance_new"
                  >
                    Bio-monthly Bulletin
                  </Link>
                </li>
                <li className="item2">
                  <Link to="pages/virtual-events-library/">
                    Industrial Directory
                  </Link>
                </li>
                <li className="item3">
                  <Link to="pages/signature-events/">Other Publication </Link>
                </li>
              </ul>
            </li>
            <li className="item5 ">
              <Link className="" to="pages/economic-development/">
                Coo Helpdesk
              </Link>
              <ul className="">
                <li className="item1">
                  <Link
                    className="first"
                    to="forms/business-first-site-visit-form/"
                  >
                    About Coo
                  </Link>
                </li>
                <li className="item2">
                  <Link
                    to="clientuploads/Documents/Climate_Resilience/the-climate-resilience-economy-nexus-advancing-common-goal.pdf"
                    onclick="window.open(this.href,'_blank'); return false;"
                  >
                    Procedure of coo
                  </Link>
                </li>
              </ul>
            </li>
            <li className="item6 ">
              <Link className="" to="#">
                GOVT. Cercullers
              </Link>
              <ul className="">
                <li className="item1">
                  <Link
                    className="first"
                    to="pages/welcome-to-our-resource-page/"
                    onclick="window.open(this.href,'_blank'); return false;"
                  >
                    State Govt. Cercullers
                  </Link>
                </li>
                <li className="item2">
                  <Link
                    to="https://www.ftlchamber.com/index.php?src=gendocs&amp;ref=Foreign-Trade%20Zone%20241"
                    onclick="window.open(this.href,'_blank'); return false;"
                  >
                    Central Govt. Cercullers
                  </Link>
                </li>               
              </ul>
            </li>
            <li className="item7 ">
              <Link className="last " to="#">
                Various Comitees
              </Link>
              <ul className="">
                <li className="item1">
                  <Link
                    className="first"
                    to="https://www.ftlchamber.com/pages/digital-magazine/"
                    onclick="window.open(this.href,'_blank'); return false;"
                  >
                    Commitees
                  </Link>
                </li>
                <li className="item2">
                  <Link to="index.php?submenu=blog&amp;src=blog&amp;srctype=blog_lister_new&amp;displaytype=Redesign_Blog">
                    Name List
                  </Link>
                </li>
                
                
                
                
              </ul>
            </li>
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
  );
}

export default Header;
