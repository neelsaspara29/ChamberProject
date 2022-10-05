import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

function MembersDirectory() {
  const [mission, setMission] = useState("");
  const [vision, setVision] = useState("");
  const fetchData = async () => {
    await ApiGet("/team/officeBearears")
      .then((data) => {
        console.log("res", data.data.data);
        // setMission(data?.data?.data[0]?.mission);
        // setVision(data?.data?.data[0]?.vision);
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
          <h2 className="text-center text-danger uppercase">
            members directory{" "}
          </h2>
        </div>
        <div className="mt-3">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            consectetur ipsam deserunt, neque rem molestiae alias reiciendis
            placeat magni. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Debitis rerum totam a, dolore expedita quas ullam magnam. Quia
            at ipsam distinctio labore beatae necessitatibus, ea commodi
            asperiores quod dolore sit! Similique possimus eos praesentium aut
            cumque earum repellat vero veritatis.
          </p>
        </div>

        <div>
          {/* <Table bordered>
            <thead></thead>
            <tbody className="uppercase">
              <tr>
                <td className="td">ordinary </td>
                <td>
                  <div className="btn btn-primary"> Download</div>
                </td>
              </tr>
              <tr>
                <td>petron </td>
                <td>
                  <div className="btn btn-primary"> Download</div>
                </td>
              </tr>
              <tr>
                <td>association </td>
                <td>
                  <div className="btn btn-primary"> Download</div>
                </td>
              </tr>
            </tbody>
          </Table> */}

          <table>
            {/* <caption>Statement Summary</caption> */}
            <thead>
              <tr>
                <th scope="col">Ordinary</th>
                <th scope="col">Petron</th>
                <th scope="col">Association</th>
               
              </tr>
            </thead>
            <tbody>
             
                  <tr>
                    <td data-label="Ordinary">
                      <div
                        className="btn btn-primary px-2 py-1  inline pub_text"
                        
                      >
                        Download
                      </div>
                    </td>
                    <td data-label="Petron">
                      <div
                        className="btn btn-primary px-2 py-1  inline pub_text"
                        
                      >
                        Download
                      </div>
                    </td>
                    <td data-label="Association">
                      <div
                        className="btn btn-primary px-2 py-1  inline pub_text"
                        
                      >
                        Download
                      </div>
                    </td>
                  </tr>
               
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MembersDirectory;
