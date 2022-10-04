import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ApiGet } from "../../Helper/API/Apidata";

function ExecutiveCommitee() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiGet("/team/fullTeam")
      .then((data) => {
        console.log("res-", data.data.data);
        setData(data?.data?.data?.executivecommitees);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <div className="text-danger text-center mt-10 uppercase">
        <h1>executive commitee</h1>
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
        <div class="wrapper">
            <div id="content" class="rightpad">
               
                <div class="staffModule moduleLister">
                    <h1 class="title">Staff Directory</h1>
                    <div>
                        <div class="listerItem">
                            <div class="thumbnail" >
              <img style={{borderRadius: "50%"}} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/carolyn-michaels-iom/?back=staff">Carolyn Michaels, IOM</a></h2>
                            <h3>Executive Vice President</h3>
                            <div class="phone"><a href="tel:954.462.2396"><span class="fa fa-phone-square"></span> 954.462.2396</a></div>
                            <div class="email"><a href="mailto:carolyn.m@ftlchamber.com"><span class="fa fa-envelope"></span> carolyn.m@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail">
              <img style={{borderRadius: "50%"}} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/denise-jordan/?back=staff">Denise Jordan</a></h2>
                            <h3>Senior Vice President</h3>
                            <div class="phone"><a href="tel:(954) 462-5940"><span class="fa fa-phone-square"></span> (954) 462-5940</a></div>
                            <div class="email"><a href="mailto:djordan@ftlchamber.com"><span class="fa fa-envelope"></span> djordan@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail" >
              <img style={{borderRadius: "50%"  }} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/donald-bohanner/?back=staff">Donald Bohanner</a></h2>
                            <h3>Director of Communications</h3>
                            <div class="phone"><a href="tel:(954) 462-4139"><span class="fa fa-phone-square"></span> (954) 462-4139</a></div>
                            <div class="email"><a href="mailto:Donald@ftlchamber.com"><span class="fa fa-envelope"></span> Donald@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail" >
              <img style={{borderRadius: "50%"  }} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/jenny-de-borja/?back=staff">Jenny De Borja</a></h2>
                            <h3>Business Development Executive</h3>
                            <div class="phone"><a href="tel:954.462.5975"><span class="fa fa-phone-square"></span> 954.462.5975</a></div>
                            <div class="email"><a href="mailto:jenny@ftlchamber.com"><span class="fa fa-envelope"></span> jenny@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail" >
              <img style={{borderRadius: "50%"}} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/jasmin-scaggs/?back=staff">Jasmin Scaggs</a></h2>
                            <h3>Director of Business Solutions</h3>
                            <div class="phone"><a href="tel:954.462.5199"><span class="fa fa-phone-square"></span> 954.462.5199</a></div>
                            <div class="email"><a href="mailto:Jasmin@ftlchamber.com"><span class="fa fa-envelope"></span> Jasmin@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
              <img style={{borderRadius: "50%"  }} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />
                            <div class="thumbnail" ></div>
                            <h2><a href="staff-directory-redesign/staff/dolores-molina/?back=staff">Dolores Molina</a></h2>
                            <h3>Administrative Coordinator</h3>
                            <div class="phone"><a href="tel:954.462.8023"><span class="fa fa-phone-square"></span> 954.462.8023</a></div>
                            <div class="email"><a href="mailto:dolores@ftlchamber.com"><span class="fa fa-envelope"></span> dolores@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail" >
              <img style={{borderRadius: "50%"  }} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/maureen-miller/?back=staff">Maureen Miller</a></h2>
                            <h3>Membership Manager</h3>
                            <div class="phone"><a href="tel:(954) 462-2570"><span class="fa fa-phone-square"></span> (954) 462-2570</a></div>
                            <div class="email"><a href="mailto:Maureen@ftlchamber.com"><span class="fa fa-envelope"></span> Maureen@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail">
              <img style={{borderRadius: "50%"  }} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/liza-soto/?back=staff">Liza Soto</a></h2>
                            <h3>Executive Assistant</h3>
                            <div class="phone"><a href="tel:(954) 462-5380"><span class="fa fa-phone-square"></span> (954) 462-5380</a></div>
                            <div class="email"><a href="mailto:liza@ftlchamber.com"><span class="fa fa-envelope"></span> liza@ftlchamber.com</a></div>
                            <div class="clear"></div>
                        </div>

                        <div class="listerItem">
                            <div class="thumbnail" >
              <img style={{borderRadius: "50%"  }} src="https://chamberlatest.s3.ap-south-1.amazonaws.com/undefined/file/1664786813874.jpg" />

                            </div>
                            <h2><a href="staff-directory-redesign/staff/rene-michel/?back=staff">Rene Michel</a></h2>
                            <h3>Building Maintenance </h3>
                            <div class="clear"></div>
                        </div>

                    </div>
                </div>
            </div>



            

        </div>
        
    </div>
    </>
  );
}

export default ExecutiveCommitee;
