import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiGet } from "../../Helper/API/Apidata";

function MembersDirectory() {
 const [data, setData] = useState({});
 const fetchData = async () => {
   await ApiGet("/members_directory/get")
     .then((data) => {
       console.log("res", data.data.data);
       setData(data?.data?.data);
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
         <h2 className="text-center text-danger title2">Members Directory </h2>
       </div>
       <div className="mt-3">
         <p style={{ textAlign: "justify" }}>{data?.intro}</p>
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
                 <div className="btn btn-primary px-2 py-1  inline pub_text">
                   <a
                     href={data?.oridinary}
                     className="hover:text-white"
                     target="_blank"
                   >
                     Download
                   </a>
                 </div>
               </td>
               <td data-label="Petron">
                 <div className="btn btn-primary px-2 py-1  inline pub_text">
                   <a
                     href={data?.petron}
                     className="hover:text-white"
                     target="_blank"
                   >
                     Download
                   </a>
                 </div>
               </td>
               <td data-label="Association">
                 <div className="btn btn-primary px-2 py-1  inline pub_text">
                   <a
                     href={data?.association}
                     className="hover:text-white"
                     target="_blank"
                   >
                     Download
                   </a>
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
