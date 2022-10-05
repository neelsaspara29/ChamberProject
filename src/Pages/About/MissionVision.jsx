import axios from "axios";
import React, { useEffect, useState } from "react";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

const MissionVision = () => {
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");
  const fetchData = async () => {
    await ApiGet("/vm/get")
      .then((data) => {
        console.log("res", data.data.data);
        setMission(data?.data?.data[0]?.mission);
        setVision(data?.data?.data[0]?.vision);
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
        <div id="interior_header_banner">
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
            <h1 class="gendocsPageTitle text-center">Mission</h1>
            <p className="text-center">{mission}</p>
            <hr />
            <h1 class="gendocsPageTitle text-center">Vision</h1>
            <p className="text-center">{vision}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
