import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
    <div className="wrapper">
      <Link id="logo" to="index.php">
        <img src="/Assets/logo9.png" alt="" />
      </Link>
      <div id="main_menu">
        <ul className="main_menu">
          <li className="item1 "><Link className="first " to="pages/about-us/">About </Link>
            <ul className="">
              <li className="item1"><Link className="first" to="pages/about-us/">About Us </Link></li>
              <li className="item2"><Link to="pages/the-chamber-s-mission-and-vision-for-the-future/">Mission & Vision </Link></li>
              <li className="item3 "><Link className="" to="index.php?submenu=boardofdirectors&amp;src=directory&amp;view=staff&amp;srctype=board_lister">Board of Directors </Link>
                <ul className="">
                  <li className="item1"><Link className="first last" to="pages/board-of-directors-library/">BOD Library </Link></li>
                </ul>
              </li>
              <li className="item4"><Link to="staff-directory-redesign/ceo/dan-lindblade-cae/">Meet the CEO </Link></li>
              <li className="item5"><Link to="staff-directory-redesign/">Meet the Staff </Link></li>
              <li className="item6"><Link className="last" to="pages/join-our-team/">Join our Team </Link></li>
            </ul>
          </li>
          <li className="item2 "><Link className="" to="pages/benefits-of-joining-the-chamber/">Membership </Link>
            <ul className="">
              <li className="item1 "><Link className="first " to="pages/here-s-how-the-chamber-works-for-you/">Benefits </Link>
                <ul className="">
                  <li className="item1"><Link className="first last" to="pages/click-and-download-your-checklist-today/">Membership Checklist </Link></li>
                </ul>
              </li>
              <li className="item2"><Link to="forms/join-the-chamber/">Join </Link></li>
              <li className="item3"><Link to="index.php?submenu=manageyourmembership&amp;src=membership&amp;srctype=myaccount">Manage Your Membership </Link></li>
              <li className="item4"><Link to="footer-logos-redesign/">Chairman's Circle </Link></li>
              <li className="item5"><Link to="index.php?submenu=trustees&amp;src=directory&amp;view=footer_logos&amp;srctype=footer_logos_trustees&amp;displaytype=Redesign_Interior">Trustees </Link></li>
              <li className="item6 "><Link className="" to="pages/councils/">Councils </Link>
                <ul className="">
                  <li className="item1"><Link className="first" to="beachcouncil2017/">Beach Council </Link></li>
                  <li className="item2"><Link to="pages/council-of-economic-advisors/">Council of Economic Advisors </Link></li>
                  <li className="item3"><Link to="pages/cultural-council/">Cultural Council </Link></li>
                  <li className="item4"><Link to="pages/downtown-council/">Downtown Council </Link></li>
                  <li className="item5"><Link to="pages/gay-lesbian-business-exchange/">GLBX </Link></li>
                  <li className="item6"><Link to="pages/greater-west-broward-business-council/">Greater West Broward Business Council </Link></li>
                  <li className="item7"><Link to="pages/oakland-park-wilton-manors-uptown-council/">Oakland Park/Wilton Manors/ Uptown Council </Link></li>
                  <li className="item8"><Link to="https://www.ftlchamber.com/index.php?submenu=trustees&amp;src=directory&amp;view=footer_logos&amp;srctype=footer_logos_trustees&amp;displaytype=Redesign_Interior">Trustee Advisory Council </Link></li>
                  <li className="item9"><Link to="pages/women-s-council/">Women's Council </Link></li>
                  <li className="item10"><Link className="last" to="pages/councils/">More </Link></li>
                </ul>
              </li>
              <li className="item7"><Link to="pages/networking-and-development/">Networking & Development </Link></li>
              <li className="item8"><Link to="membership/">Membership Directory </Link></li>
              <li className="item9 "><Link className="" to="pages/offers-discounts/">Offers & Discounts </Link>
                <ul className="">
                  <li className="item1"><Link className="first last" to="coupons/">Member-To-Member Coupons </Link></li>
                </ul>
              </li>
              <li className="item10"><Link className="last" to="pages/market-yourself-through-the-chamber/?displaytype=Redesign_Interior">Marketing Opportunities </Link></li>
            </ul>
          </li>
          <li className="item3"><Link to="https://www.ftlchamber.com/index.php?submenu=manageyourmembership&amp;src=membership&amp;srctype=myaccount">Log In </Link></li>
          <li className="item4 "><Link className="" to="index.php?submenu=events&amp;src=events&amp;srctype=events_lister_new">Events </Link>
            <ul className="">
              <li className="item1"><Link className="first" to="index.php?submenu=eventsCalendar&amp;src=events&amp;srctype=events_glance_new">Events Calendar </Link></li>
              <li className="item2"><Link to="pages/virtual-events-library/">Virtual Events Library </Link></li>
              <li className="item3"><Link to="pages/signature-events/">Signature Events </Link></li>
              <li className="item4"><Link className="last" to="pages/leadership-fort-lauderdale/">Leadership Fort Lauderdale </Link></li>
            </ul>
          </li>
          <li className="item5 "><Link className="" to="pages/economic-development/">Economic Development </Link>
            <ul className="">
              <li className="item1"><Link className="first" to="forms/business-first-site-visit-form/">Business F1rst Survey </Link></li>
              <li className="item2"><Link to="clientuploads/Documents/Climate_Resilience/the-climate-resilience-economy-nexus-advancing-common-goal.pdf" onclick="window.open(this.href,'_blank'); return false;">The Climate Resilience-Economy Nexus </Link></li>
              <li className="item3"><Link to="pages/business-f1rst/">Business F1rst </Link></li>
              <li className="item4"><Link to="forms/business-climate-survey/">2017 Business Climate Survey Results </Link></li>
              <li className="item5 "><Link className="last " to="pages/policy-advocacy/">Policy & Advocacy </Link>
                <ul className="">
                  <li className="item1"><Link className="first" to="pages/affordable-housing/">Affordable Housing </Link></li>
                  <li className="item2"><Link to="pages/economic-resiliency/">Economic Resiliency </Link></li>
                  <li className="item3"><Link className="last" to="pages/the-washington-summit/">Washington Summit </Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="item6 "><Link className="" to="#">Resources </Link>
            <ul className="">
              <li className="item1"><Link className="first" to="pages/welcome-to-our-resource-page/" onclick="window.open(this.href,'_blank'); return false;">Education </Link></li>
              <li className="item2"><Link to="https://www.ftlchamber.com/index.php?src=gendocs&amp;ref=Foreign-Trade%20Zone%20241" onclick="window.open(this.href,'_blank'); return false;">Foreign-Trade Zone 241 </Link></li>
              <li className="item3"><Link to="pages/">Coronavirus (COVID-19) </Link></li>
              <li className="item4"><Link to="https://www.youtube.com/watch?v=26lm_nhX71o&amp;feature=youtu.be">2020 Southeast Florida Transportation Summit </Link></li>
              <li className="item5"><Link to="pages/partnering-to-connect-employers-with-employees/">Post/Find a Job </Link></li>
              <li className="item6"><Link to="pages/about-broward-county/">About Broward County </Link></li>
              <li className="item7"><Link to="pages/about-fort-lauderdale/">About Fort Lauderdale </Link></li>
              <li className="item8"><Link to="pages/about-oakland-park-wilton-manors-uptown/">About Oakland Park/ Wilton Manors/ Uptown </Link></li>
              <li className="item9"><Link className="last" to="pages/about-west-broward/">About West Broward </Link></li>
            </ul>
          </li>
          <li className="item7 "><Link className="last " to="#">News & Media </Link>
            <ul className="">
              <li className="item1"><Link className="first" to="https://www.ftlchamber.com/pages/digital-magazine/" onclick="window.open(this.href,'_blank'); return false;">Digital Magazine </Link></li>
              <li className="item2"><Link to="index.php?submenu=blog&amp;src=blog&amp;srctype=blog_lister_new&amp;displaytype=Redesign_Blog">Blog </Link></li>
              <li className="item3"><Link to="https://www.ftlchamber.com/pages/chamber-newsletters/">Newsletter </Link></li>
              <li className="item4"><Link to="http://www.soflobusinesscouncil.com/news.php">South Florida Business Council </Link></li>
              <li className="item5"><Link to="pages/stay-up-to-speed-on-chamber-happenings/">Email Signup </Link></li>
              <li className="item6"><Link className="last" to="index.php?submenu=photovideo&amp;src=photo">Photo & Video </Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="has_it_logo"></div>
      <div id="social_header">
        <Link className="facebook" to="https://www.facebook.com/ftlchamber/" target="_blank"><span className="fa fa-facebook"></span></Link>
        <Link className="twitter" to="https://twitter.com/ftlchamber" target="_blank"><span className="fa fa-twitter"></span></Link>
        <Link className="linkedin" to="https://www.linkedin.com/groups/855347" target="_blank"><span className="fa fa-linkedin"></span></Link>
        <Link className="instagram" to="https://www.instagram.com/ftlchamber/" target="_blank"><span className="fa fa-instagram"></span></Link>
        <Link className="youtube" to="https://www.youtube.com/channel/UC6poMQbbx9lT8ltWGlRU2eA?view_as=subscriber"><span className="fa fa-youtube"></span></Link>
      </div>

      {/* <!-- mobile menu section --> */}
      {/* <div id="menu_toggle">
        <span className="fa fa-bars"></span>
      </div> */}

      {/* <!-- end of mobile menu --> */}

    </div>
  </div>
  )
}

export default Header