import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";

function StateCirculer() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/govt_circulers/get", {
      page: 1,
      limit: 10,
      type: 1,
    })
      .then((data) => {
        console.log("res-", data.data.data);
        setData(data?.data?.data?.govtCirculersData);
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
        <div className="text-center mt-3">
          <h2 className=" text-danger title2">Central Government Circulars</h2>
        </div>
        <div className="w-2/3 m-auto mt-3 pub">
          <table>
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr>
                <th scope="col">Serial Number</th>
                <th scope="col">Particular</th>
                <th scope="col">Authority</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td data-label="Serial Number">{item.sNumber}</td>
                    <td data-label="Particular">{item.particulers}</td>
                    <td data-label="Authority">{item.authority}</td>
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
        </div>
      </div>
    </>
  );
}

export default StateCirculer;
