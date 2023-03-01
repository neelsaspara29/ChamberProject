import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

function Bearear() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiGet("/team/fullTeam")
      .then((data) => {
        console.log("res-", data.data.data);
        let tempdata = data?.data?.data?.officeBearer;
        tempdata = tempdata.sort((data1, data2) => data1.number - data2.number);
        console.log(tempdata);
        setData(tempdata);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(window.innerWidth);
    console.log(window.innerWidth < 300);
    fetchData();
  }, []);
  return (
    <>
      <Header1 />

      <div id="interior_content">
        <div class="wrapper">
          <div id="content" class="rightpad pb-1">
            <div class="staffModule moduleLister ">
              <h1 class="title2 text-danger text-center mb-3 uppercase">
                {" "}
                Office Bearers
              </h1>
              <div className="">
                {data.map((item) => {
                  return (
                    <div class="listerItem">
                      <div class="thumbnail">
                        <img
                          className="team_img"
                          style={{ borderRadius: "50%" }}
                          src={item?.image}
                        />
                      </div>
                      {window.innerWidth < 500 ? (
                        <>
                          <div>
                            <h4>
                              <a>{item?.name}</a>
                            </h4>
                            <h5
                              style={{ color: "#00945e", textAlign: "justify" }}
                            >
                              {item?.role}
                            </h5>
                            <h6 class="phone" style={{ marginBottom: "1px" }}>
                              <a href="#">
                                {item?.compneyName && (
                                  <>
                                    <span class="fa fa-building-o"></span>{" "}
                                    {item?.compneyName}
                                  </>
                                )}
                              </a>
                            </h6>
                            <div class="phone">
                              <a href={"tel:" + item?.mobile}>
                                <span class="fa fa-phone-square"></span>{" "}
                                {item?.mobile}
                              </a>
                            </div>
                            <div class="email lowercase">
                              <a
                                href={"mailto:" + item?.email}
                                className="d-flex "
                              >
                                {item?.email && (
                                  <>
                                    <div>
                                      <span class="fa fa-envelope"></span>{" "}
                                    </div>
                                    <div>{item?.email}</div>
                                  </>
                                )}
                              </a>
                            </div>
                            <div class="clear"></div>
                          </div>
                        </>
                      ) : (
                        <div>
                          <h2>
                            <a>{item?.name}</a>
                          </h2>
                          <h3>{item?.role}</h3>
                          <div class="phone">
                            <a href={"#"}>
                              {item?.compneyName && (
                                <>
                                  <span class="fa fa-building-o"></span>{" "}
                                  {item?.compneyName}
                                </>
                              )}
                            </a>
                          </div>
                          <div class="phone">
                            <a href={"tel:" + item?.mobile}>
                              {item?.mobile && (
                                <>
                                  <span class="fa fa-phone-square"></span>{" "}
                                  {item?.mobile}
                                </>
                              )}
                            </a>
                          </div>
                          <div class="email lowercase">
                            <a href={"mailto:" + item?.email}>
                              {item?.email && (
                                <>
                                  <span class="fa fa-envelope"></span>
                                  {item?.email}
                                </>
                              )}
                            </a>
                          </div>
                          <div class="clear"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bearear;
