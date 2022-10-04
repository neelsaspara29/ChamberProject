import axios from "axios";
import React, { useEffect, useState } from "react";
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
            <h1 class="gendocsPageTitle text-center">About Us</h1>
            <p className="text-center">
              {data}
              <a
                href="http://washingtonsummit.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Washington Summit
              </a>{" "}
              trip.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
