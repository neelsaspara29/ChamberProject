import React, { useEffect, useState } from "react";
import Header1 from "../../Components/Header/Header1";
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
      <Header1 />
      <div id="interior_content">
        <div class="wrapper">
          <div id="content" class="rightpad">
            <div class="staffModule moduleDetail">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div class="thumbnail">
                  <img
                    style={{
                      borderRadius: "50%",
                      border: "3px solid red",
                      width: "12rem",
                      height: "12rem",
                    }}
                    src={data?.image}
                  />
                </div>
                <h1
                  class="title"
                  style={{ color: "#0071b9", fontWeight: "600" }}
                >
                  {data?.name}
                </h1>
                <h3 style={{ color: "#00945e", fontWeight: "500px" }}>
                  {data?.post}
                </h3>
              </div>
              <div class="bio w-5/6 mx-auto" style={{ textAlign: "justify" }}>
                <p>{data?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageChairman;
