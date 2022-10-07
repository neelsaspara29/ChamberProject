import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";

function Publications() {
  const [data, setData] = useState([]);
  const [totalpage, settotalpage] = useState(0);
  const [active, setActive] = useState(1);
  const fetchData = async (page, limit) => {
    await ApiPost("/other/get", {
      page: page,
      limit: limit,
    })
      .then((data) => {
        console.log("res-", data.data);
        setData(data?.data?.data?.otherData);
        settotalpage(data?.data?.data?.state?.page_limit);
      })
      .catch((err) => console.log(err));
  };
  const handleChangePagination = (page) => {
    setActive(page);
    fetchData(page, 10);
  };
  useEffect(() => {
    fetchData(1, 10);
  }, []);
  return (
    <>
      <Header1 />
      <div id="interior_content">
        <div className="text-center mt-3">
          <h2
            className="uppercase title2 text-danger"
            style={{ fontWeight: "700" }}
          >
            Other Publication
          </h2>
        </div>
        <div className="w-2/3 m-auto mt-4 pub">
          <table>
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr>
                <th scope="col">SERIAL NUMBER</th>
                <th scope="col">MONTH</th>
                <th scope="col">CREATE DATE</th>
                <th scope="col">DOWNLOAD</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td data-label="Serial Number">{item.sNumber}</td>
                    <td data-label="Month">{item.month}</td>
                    <td data-label="Created Date">
                      {moment(item.createdAt).format(" MMMM Do YYYY")}
                    </td>
                    <td data-label="Download">
                      <div
                        className="btn btn-primary px-2 py-1  inline pub_text"
                        onClick={() => {
                          window.open(item?.link);
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

export default Publications;
