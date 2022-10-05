import React from "react";
import { Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";

function VisaService() {
  return (
    <>
      <Header1 />
      <div className="w-2/3 m-auto mt-4">
        <div>
          <h2 className="text-center text-danger">Visa Recomandation</h2>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            consequuntur magnam. A dolor neque quisquam. Aut recusandae
            reprehenderit, quia modi inventore esse tempore ad ipsam saepe eos
            nobis, atque, consequuntur voluptatum nesciunt commodi iste! At
            numquam obcaecati assumenda dolorem placeat.
          </p>
          <p className="text-blue-400 hover:text-blue-900">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Required Documents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Document 1- this is first document for apply in visa</td>
                </tr>
                <tr>
                  <td>Document 1- this is first document for apply in visa</td>
                </tr>
                <tr>
                  <td>Document 1- this is first document for apply in visa</td>
                </tr>
                <tr>
                  <td>Document 1- this is first document for apply in visa</td>
                </tr>
              </tbody>
            </Table>
          </p>
          <button className="btn btn-primary"> DOWNLOAD PDF</button>
        </div>
      </div>
    </>
  );
}

export default VisaService;
