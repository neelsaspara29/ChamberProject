import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";

function Publications() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/other/get", {
      page: 1,
      limit: 10,
    })
      .then((data) => {
        console.log("res-", data.data);
        setData(data?.data?.data?.otherData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-danger uppercase">bulletins</h2>
      </div>
      <div className="w-2/3 m-auto mt-4">
        <Table striped bordered hover>
          <thead>
            <tr className="uppercase">
              <th>Idx</th>
              <th>Serial Number</th>
              <th>Month</th>
              <th>Create Date</th>
              <th>download</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((single, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{single.sNumber}</td>
                  <td>{single.month}</td>
                  <td>{moment(single.createdAt).format(" MMMM Do YYYY")}</td>
                  <td className="text-center  ">
                    <div className="btn btn-primary px-3 py-2 w-30 inline ">
                      Download
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

export default Publications;
