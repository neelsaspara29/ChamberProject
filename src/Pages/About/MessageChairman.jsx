import React, { useEffect, useState } from "react";
import { ApiGet } from "../../Helper/API/Apidata";

const MessageChairman = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    await ApiGet("/msgpresident/get")
      .then((data) => {
        console.log("res", data.data.data);
        setData(data?.data?.data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div id="interior_content">
        <div id="interior_header_banner">
          <span id="bnrinst_2_450">
            <img
              src="cache/sql/fba/fs_450.jpg"
              width="1439"
              height="300"
              alt=""
            />
          </span>
        </div>
        <div class="wrapper">
          <div id="content" class="rightpad">
            <div class="staffModule moduleDetail">
              <div
                class="thumbnail"
                id="chairmainImage"
                //   style="
                //     background-image: url('images/directory/staff/Ritz_DHL_med.jpg');"
                // style={{backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Fmukesh-ambani%2F&psig=AOvVaw2DMyrlYMc5r7JuM66H3qP3&ust=1664364751124000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjm5__vtPoCFQAAAAAdAAAAABAE')"}}
              ></div>
              <h1 class="title">{data?.name}, INDIA</h1>
              <h3>President & CEO</h3>
              <div class="bio">
                <p>{data?.text}</p>
              </div>
              <div class="phone">
                <a href="tel:954.462.4911">
                  <span class="fa fa-phone-square"></span> 954.462.4911
                </a>
              </div>
              <div class="email">
                <a href="mailto:dan@ftlchamber.com">
                  <span class="fa fa-envelope"></span> dan@ftlchamber.com
                </a>
              </div>
              <div class="clear"></div>
            </div>
          </div>

          <div id="sidebar" class="staffpage">
            <div id="sub_menu">
              <div id="sub_menu_title">About</div>

              <ul class="sub_menu">
                <li class="item1">
                  <a class="first" href="pages/about-us/">
                    About Us{" "}
                  </a>
                </li>
                <li class="item2">
                  <a href="pages/the-chamber-s-mission-and-vision-for-the-future/">
                    Mission & Vision
                  </a>
                </li>
                <li class="item3">
                  <a
                    class=""
                    href="index.php?submenu=boardofdirectors&amp;src=directory&amp;view=staff&amp;srctype=board_lister"
                  >
                    Board of Directors
                  </a>
                  <ul class="">
                    <li class="item1">
                      <a
                        class="first last"
                        href="pages/board-of-directors-library/"
                      >
                        BOD Library
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="menuItemHighlight item4">
                  <a
                    class="current"
                    href="staff-directory-redesign/ceo/dan-lindblade-cae/"
                  >
                    Meet the CEO
                  </a>
                </li>
                <li class="item5">
                  <a href="staff-directory-redesign/">Meet the Staff </a>
                </li>
                <li class="item6">
                  <a class="last" href="pages/join-our-team/">
                    Join our Team{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div class="">
              <span id="bnrinst_3_535">
                <a class="fba_links" rel="nofollow" href="fba/td-bank/535/">
                  <img
                    src={data?.image}
                    width={200}
                    height={200}
                    alt="TD Bank"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageChairman;
