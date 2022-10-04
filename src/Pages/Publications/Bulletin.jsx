import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";

function Bulletin() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/bulletin/get", {
      page: 1,
      limit: 10,
    })
      .then((data) => {
        console.log("res-", data.data);
        setData(data?.data?.data?.bulletinsData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div id="interior_content">
    
      <div className="text-center mt-3">
        <h2 className="text-danger uppercase">bulletins</h2>
      </div>
      <div className="w-2/3 m-auto mt-4">
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
   {
    data.map((item) => {
      return (
        <tr>
       
                
                  <td data-label = "Serial Number">{item.sNumber}</td>
                  <td data-label = "Month">{item.month}</td>
                  <td data-label = "Created Date">{moment(item.createdAt).format(" MMMM Do YYYY")}</td>
                  <td data-label = "Download" >
                    <div className="btn btn-primary px-2 py-1  inline ">
                      Download
                    </div>
                  </td>
                </tr>
   
      )
    })
   }
    
  </tbody>
</table>
      </div>
      </div>
    </>
  );
}

export default Bulletin;
