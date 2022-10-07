import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";

function PressRelease() {
  const [data, setData] = useState([]);
  const [totalpage, settotalpage] = useState(0);
  const [currentpage, setcurrentpage] = useState(1);
  const [pagesize, setpagesize] = useState(10);
  const [active, setActive] = useState(1);

  const fetchData = async (page, limit) => {
    await ApiPost("/press/get", {
      page: page,
      limit: limit,
    })
      .then((data) => {
        console.log("res-", data.data);
        setData(data?.data?.data?.presssData);
        settotalpage(data?.data?.data?.state?.page_limit);
      })
      .catch((err) => console.log(err));
  };
  const handleChangePagination = (page) => {
    setActive(page);
    fetchData(page, 10);
  };
  useEffect(() => {
    fetchData(active, pagesize);
  }, []);
  return (
    <>
      <Header1 />
      <div id="interior_content">
        <div className="text-center mt-3">
          <h2
            className=" uppercase title2 text-danger"
            style={{ fontWeight: "700" }}
          >
            press release
          </h2>
        </div>
        <div className="w-2/3 m-auto mt-4 pub">
          <table>
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr className="uppercase">
                <th scope="col">SERIAL NUMBER</th>
                <th scope="col">particulers</th>
                <th scope="col">docFile</th>
                <th scope="col">pdf</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td data-label="Serial Number">{item.sNumber}</td>
                    <td data-label="Month">{item.particulers}</td>
                    <td data-label="Created Date">
                      <div
                        className="btn btn-primary px-2 py-1  inline pub_text"
                        onClick={() => {
                          window.open(item?.docFile);
                        }}
                      >
                        Download
                      </div>
                    </td>
                    <td data-label="Download">
                      <div
                        className="btn btn-primary px-2 py-1  inline pub_text"
                        onClick={() => {
                          window.open(item?.pdf);
                        }}
                      >
                        Download
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination className="mt-2">
            {Array.from({ length: totalpage }, (_, index) => index + 1)?.map(
              (item) => (
                <Pagination.Item
                  key={item}
                  onClick={() => handleChangePagination(item)}
                  active={item === active}
                >
                  {item}
                </Pagination.Item>
              )
            )}
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default PressRelease;
