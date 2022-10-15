import React from "react";
import Header1 from "../../Components/Header/Header1";
import er from "../../Helper/pdf/COO/ER.pdf";
import em from "../../Helper/pdf/COO/EM.pdf";
import faq from "../../Helper/pdf/COO/FAQ.pdf";
import dup from "../../Helper/pdf/COO/duplicat.pdf";
function ProcedureCoo() {
  return (
    <>
      <Header1 />
      <div className="text-danger text-center my-4 uppercase">
        <h2 className="title2">Procedure</h2>
      </div>
      <div
        className="w-3/4  m-auto pub text"
        style={{ fontSize: "16px", textAlign: "justify" }}
      >
        <b>
          {" "}
          Dear Member's, <br />
          Greetings from Saurashtra Chamber of Commerce and Industry !!!{" "}
        </b>
        <br />
        <br />
        {/* <p className="text-end"> */}
        As you know, the units doing export operations require Certificate of
        Origin this Certificate of Origin is issued by the authorized local
        Chamber of Commerce. Apart from Bhavnagar, Saurashtra Chamber of
        Commerce and Industry has been authorized by the department of the
        Directorate General of Foreign Trade (DGFT), Ministry of Commerce &
        Industry, Government of India to issue Certificate of Origin
        (Non-Preferential) to units exporting from Bhavnagar and Saurashtra
        Region. Presently, as parts of e-Governance of the Government of India
        Directorate General of Foreign Trade (DGFT) are making all operations of
        Certificate of Origin (Non-Preferential) is compulsorily online w.e.f.
        01.04.2022 through the authorized common portal coo.dgtf.gov.in. In
        which the exporters have to select Saurashtra Chamber of Commerce and
        Industry-Bhavnagar in the issuing agency while making the online
        application. Hence, the units doing export operations have to do their
        one-time registration on the above authorized common portal for issuance
        of Certificate of Origin (Non-Preferential). Exporter Registration
        Manual and Exporter Application Manual are enclosed herewith for all
        process information on registration and online application on this
        online portal. If you need any other information or guidance in this
        matter, you can contact our chamber's employee Mr. Jignesh Bhatt on the
        official mobile number of the Chamber at +91-9408 80 7980 during office
        hours.
        {/* </p> */}
      </div>
      <table className="w-4/5 mt-3 mx-auto ">
        {/* <caption>Statement Summary</caption> */}
        <thead>
          <tr>
            <th scope="col">Exporter Registratoin</th>
            <th scope="col">Exporter Manual</th>
            <th scope="col">FAQs</th>
            <th scope="col">Duplicate application steps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Exporter Registratoin">
              <a
                href={er}
                className="hover:text-white"
                target="_blank"
                // download
              >
                <div className="btn btn-primary px-2 py-1  inline pub_text">
                  Download
                </div>
              </a>
            </td>
            <td data-label="Exporter Manual">
              <a
                href={em}
                className="hover:text-white"
                target="_blank"
                // download
              >
                <div className="btn btn-primary px-2 py-1  inline pub_text">
                  Download
                </div>
              </a>
            </td>

            <td data-label="FAQs">
              <a
                href={faq}
                className="hover:text-white"
                target="_blank"
                // download
              >
                <div className="btn btn-primary px-2 py-1  inline pub_text">
                  Download
                </div>
              </a>
            </td>
            <td data-label="FAQs">
              <a
                href={dup}
                className="hover:text-white"
                target="_blank"
                // download
              >
                <div className="btn btn-primary px-2 py-1  inline pub_text">
                  Download
                </div>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex mx-auto mt-10 w-3/4 justify-start">
        <div className="procedure_coo">
          <div>
            <p className="text-primary " style={{ fontSize: "12px" }}>
              <a href="https://coo.dgft.gov.in/" target="_blank">
                click hear to apply for COO
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcedureCoo;
