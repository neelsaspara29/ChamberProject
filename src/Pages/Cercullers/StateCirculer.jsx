import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
      <div className="text-center mt-3">
        <h2 className="text-danger uppercase">central goverment Circulars</h2>
      </div>
      <div className="w-2/3 m-auto mt-4">
        <Table striped bordered hover>
          <thead>
            <tr className="uppercase">
              <th>Idx</th>
              <th>Serial Number</th>
              <th>date</th>
              <th>Particulers</th>
              <th>AUthority</th>
              <th>download</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((single, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{single.sNumber}</td>
                  <td>{moment(single.createdAt).format(" MMMM Do YYYY")}</td>
                  <td>{single.particulers}</td>
                  <td>{single.authority}</td>
                  <td className="text-center  ">
                    <div className="btn btn-primary px-3 py-2 w-30 inline ">
                      <a href={single.pdf} target="_blank">
                        {" "}
                        Download
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default StateCirculer;
