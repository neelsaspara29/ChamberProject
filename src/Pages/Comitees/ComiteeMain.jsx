import React, { useEffect, useState } from "react";
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
      <div className="text-center uppercase text-danger mt-3">
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
      </div>
    </>
  );
}

export default ComiteeMain;
