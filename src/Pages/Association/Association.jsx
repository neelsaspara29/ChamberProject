import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";

function Association() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/ass_association/get", {
      page: 1,
      limit: 1000,
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
      <Header1 />
      <div className="w-2/3 m-auto mt-4 pub">
        <div>
          <h4 className="text-center text-danger title2">
            Associated Association With Scci
          </h4>
        </div>
        <div className="mt-3">
          <p style={{ textAlign: "justify" }}>
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
          <table>
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr>
                <th scope="col">Serial Number</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact-1</th>
                <th scope="col">Contact-2</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td data-label="Serial Number">{item?.sNumber}</td>
                    <td data-label="Name">{item?.name}</td>
                    <td data-label="Address">
                      <div className="td_as">{item?.address}</div>
                    </td>
                    <td data-label="Contact-1">{item?.contact1}</td>
                    <td data-label="Contact-2">{item?.contact2}</td>
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

export default Association;
