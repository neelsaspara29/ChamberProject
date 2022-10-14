import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

function Executivecommittee() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiGet("/team/fullTeam")
      .then((data) => {
        console.log("res-", data.data.data);
        let tempdata = data?.data?.data?.executivecommitees;
        tempdata = tempdata.sort((data1, data2) => data1.number - data2.number);
        console.log(tempdata);
        setData(tempdata);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header1 />
      {/* <div className="text-danger text-center mt-10 uppercase">
        <h1>executive committee</h1>
      </div>
      <div className="w-3/5 m-auto mt-5">
        <div className="team_member">
          <div className="d-flex flex-wrap justify-evenly">
            {data?.map((single) => {
              return (
                <Card className="team_card" style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>
                      <div className="text-center">
                        <img
                          src="/Assets/team/1.jpg"
                          // width={150}
                          height={100}
                          className="m-auto w-4/5"
                        ></img>
                      </div>
                    </Card.Title>
                    <Card.Subtitle className="m-auto text-muted text-center">
                      <h4>
                        <b className="uppercase"> {single.name}</b>
                      </h4>
                    </Card.Subtitle>
                    <Card.Text>
                      <p className="uppercase">
                        {single.role ? single.role : " member of scci"}
                      </p>
                      <p>{single?.mobile}</p>
                      <p>{single?.email}</p>
                    </Card.Text>
                    <Card.Link href="#">
                      <span className="fa fa-twitter"></span>
                    </Card.Link>
                    <Card.Link href="#">
                      <span className="fa fa-facebook"></span>
                    </Card.Link>
                    <Card.Link href="#">
                      <span className="fa fa-instagram"></span>
                    </Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div> */}
      <div id="interior_content">
        {/* <div id="interior_header_banner"><span id="bnrinst_2_450"><img src="cache/sql/fba/fs_450.jpg" width="1439" height="300" style="border:0" alt=""  /></span>
            
        </div> */}
        <div class="wrapper capitalize">
          <div id="content" class="rightpad pb-1">
            <div class="staffModule moduleLister ">
              <h1 class="title2 text-danger text-center mb-3 uppercase">
                Executive Committee
              </h1>
              <div className="uppercase">
                <div className=" lg:m-auto">
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
                              <h5 style={{ color: "#00945e" }}>{item?.role}</h5>
                              <h6 class="phone">
                                <a href={"tel:" + item?.mobile}>
                                  <span class="fa fa-building-o"></span>{" "}
                                  {item?.compneyName}
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
                                  <div>
                                    <span class="fa fa-envelope"></span>{" "}
                                  </div>
                                  <div>{item?.email}</div>
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
                              <a href={"tel:" + item?.mobile}>
                                <span class="fa fa-building-o"></span>{" "}
                                {item?.compneyName}
                              </a>
                            </div>
                            <div class="phone">
                              <a href={"tel:" + item?.mobile}>
                                <span class="fa fa-phone-square"></span>{" "}
                                {item?.mobile}
                              </a>
                            </div>
                            <div class="email lowercase">
                              <a href={"mailto:" + item?.email}>
                                <span class="fa fa-envelope"></span>{" "}
                                {item?.email}
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
      </div>
    </>
  );
}

export default Executivecommittee;
