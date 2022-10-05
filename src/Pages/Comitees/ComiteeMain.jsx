import React, { useEffect, useState } from "react";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

function ComiteeMain() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiGet("/commite/get", {
      page: 1,
      limit: 10,
    })
      .then((data) => {
        console.log("res-", data.data.data);
        setData(data?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header1 />
      {/* <div className="text-center uppercase text-danger mt-3">
        <h2>Committees</h2>
      </div>
      <div
        className="d-flex w-11/12 mx-auto  flex-wrap commitee_main "
        style={{ marginTop: "3rem" }}
      >
        {data?.map((single) => {
          return (
            <div className="commitee_one">
              <div className="border-1 border-zinc-500 border p-2">
                <div className="uppercase text-center text-green-500   border-bottom border-black">
                  <h3> {single.name}</h3>
                </div>
                <div className="d-flex flex-col mt-2 py-3">
                  <div className="m-auto">
                    {single.image ? (
                      <img
                        src="/Assets/team/1.jpg"
                        width={200}
                        height={200}
                        alt="vv"
                        style={{ borderRadius: "70%" }}
                      />
                    ) : (
                      <img
                        src="/Assets/commitee/man/man.jpg"
                        height={300}
                        // style={{ borderRadius: "50%" }}
                        className="w-full"
                      />
                    )}
                  </div>
                  <div className="commitee_details text-gray-600 w-4/5 ">
                    <div className="">
                      <div className=" top-5 right-0 ">Chairman :</div>
                      <div className=" top-5 right-0 ">Email :</div>
                      <div className=" top-5 right-0 ">Contact :</div>
                    </div>
                    <div className="">
                      <div className=" top-5 right-0 ">
                        {single.chairmenName}
                      </div>
                      <div className=" top-5 right-0 ">{single.email}</div>
                      <div className=" top-5 right-0 ">{single.phone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div id="interior_content">
        {/* <div id="interior_header_banner"><span id="bnrinst_2_450"><img src="cache/sql/fba/fs_450.jpg" width="1439" height="300" style="border:0" alt=""  /></span>
            
        </div> */}
        <div class="wrapper">
          <div id="content" class="rightpad pb-1">
            <div class="staffModule moduleLister ">
              <h1 class="title2 text-center text-danger mb-3"> Various Committee</h1>
              <div>
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
                      <h2>
                        <a href="staff-directory-redesign/staff/carolyn-michaels-iom/?back=staff">
                          {item?.chairmenName}
                        </a>
                      </h2>
                      <h3>{item?.name}</h3>
                      <div class="phone">
                        <a href="tel:954.462.2396">
                          <span class="fa fa-phone-square"></span> {item?.phone}
                        </a>
                      </div>
                      <div class="email">
                        <a href="mailto:carolyn.m@ftlchamber.com">
                          <span class="fa fa-envelope"></span> {item?.email}
                        </a>
                      </div>
                      <div class="clear"></div>
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

export default ComiteeMain;
