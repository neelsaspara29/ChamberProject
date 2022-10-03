import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";

function Association() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/ass_association/get", {
      page: 1,
      limit: 10,
    })
      .then((data) => {
        console.log("res-", data);
        setData(data?.data?.data?.ass_associationsData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-2/3 m-auto mt-4">
        <div>
          <h2 className="text-center text-danger uppercase">
            associated association of scci
          </h2>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            consectetur ipsam deserunt, neque rem molestiae alias reiciendis
            placeat magni. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Debitis rerum totam a, dolore expedita quas ullam magnam. Quia
            at ipsam distinctio labore beatae necessitatibus, ea commodi
            asperiores quod dolore sit! Similique possimus eos praesentium aut
            cumque earum repellat vero veritatis.
          </p>
        </div>

        <div className=" m-auto mt-4">
          <Table striped bordered>
            <thead>
              <tr className="uppercase">
                <th>Idx</th>
                <th>Serial Number</th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((single) => {
                return (
                  <tr>
                    <td>1</td>
                    <td>{single?.sNumber}</td>
                    <td>{single?.name}</td>
                    <td>{single?.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Association;
