import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiPost } from "../../Helper/API/Apidata";

function GovCerculler() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiPost("/govt_circulers/get", {
      page: 1,
      limit: 10,
      type: 0,
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
      {/* <div className="text-center mt-3">
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
      </div> */}
      <div id="interior_content">
    
      <div className="text-center mt-3">
        <h2 className=" uppercase" style={{color:"#1700ec", fontWeight: "700"}}>State Government Circulars</h2>
      </div>
      <div className="w-2/3 m-auto mt-4 pub">
      <table>
  {/* <caption>Statement Summary</caption> */}
  <thead>
    <tr>
    
      <th scope="col">Serial Number</th>
      <th scope="col">Date</th>
      <th scope="col">Particular</th>
      <th scope="col">Authority</th>
      <th scope="col">Download</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((item) => {
      return (
        <tr>
       
                
                  <td data-label = "Serial Number">{item.sNumber}</td>
                  <td data-label = "Date">{moment(item.createdAt).format(" MMMM Do YYYY")}</td>
                  <td data-label = "Particular">{item.particulers}</td>
                  <td data-label = "Authority">{item.authority}</td>
                  <td data-label = "Download" >
                    <div className="btn btn-primary px-2 py-1  inline pub_text" onClick={() => {window.open(item?.pdf)}}>
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

export default GovCerculler;
