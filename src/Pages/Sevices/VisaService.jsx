import React from "react";
import { Table } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import pdf from "../../Helper/pdf/visa.pdf";

function VisaService() {
  return (
    <>
      <Header1 />
      <div className="w-2/3 m-auto mt-4 pub">
        <div>
          <h2 className="text-center title2 text-danger uppercase">
            Visa Recomandation
          </h2>
        </div>
        <p style={{ fontSize: "16px" }}>
          {" "}
          <b>
            {" "}
            Dear Members, <br />
            <br /> Greetings from Saurashtra Chamber of Commerce and Industry!!!{" "}
          </b>
          <br />
        </p>
        <div
          className="mt-3"
          style={{ fontSize: "16px", textAlign: "justify" }}
        >
          <p className="">
            In order for the trade and industry of Bhavnagar district to connect
            with global trade, the businessmen, traders or their staff has to
            travel abroad for business purposes. A recommendation letter from a
            Chamber of Commerce recognized by the Government of India is
            required to obtain this foreign travel visa and hence priority is
            given in obtaining the visa. Saurashtra Chamber of Commerce and
            Industry-Bhavnagar has been authorized by the Directorate General of
            Foreign Trade (DGFT) department of the Ministry of Commerce and
            Industry, Government of India to issue such recommendation letters
            to their members. Any businessmen, traders and their staff who wants
            to get Visa Recommendation letter from the Saurashtra Chamber have
            to produce following papers.
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
                  <td className="vd">
                    Request letter as per format (on company letter head)
                  </td>
                </tr>
                <tr>
                  <td className="vd">Certified copy of applicant's passport</td>
                </tr>
                <tr>
                  <td className="vd">
                    Certified copy of invitation letter received from foreign
                    company
                  </td>
                </tr>
                <tr>
                  <td className="vd">
                    Certified copy of ID card if the applicant is an employee of
                    the company
                  </td>
                </tr>
              </tbody>
            </Table>
          </p>
          <button className="btn btn-primary">
            {" "}
            <a href={pdf} className="hover:text-white" target="_blank">
              DOWNLOAD PDF
            </a>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default VisaService;
