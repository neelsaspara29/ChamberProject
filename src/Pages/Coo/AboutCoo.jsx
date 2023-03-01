import React from "react";
import Header1 from "../../Components/Header/Header1";

function AboutCoo() {
  return (
    <>
      <Header1 />
      <div>
        <h1 className="text-danger title2  text-center my-3 uppercase">
          About Coo
        </h1>
      </div>
      <div
        className="w-3/4 m-auto pub"
        style={{ fontSize: "16px", textAlign: "justify" }}
      >
        <p className="text">
          <b>
            {" "}
            Dear Member's, <br />
            Greetings from Saurashtra Chamber of Commerce and Industry !!!{" "}
          </b>
          <br />
          <br /> As you know, the units doing export operations require
          Certificate of Origin this Certificate of Origin is issued by the
          authorized local Chamber of Commerce. Apart from Bhavnagar, Saurashtra
          Chamber of Commerce and Industry has been authorized by the department
          of the Directorate General of Foreign Trade (DGFT), Ministry of
          Commerce & Industry, Government of India to issue Certificate of
          Origin (Non-Preferential) to units exporting from Bhavnagar and
          Saurashtra Region. Presently, as parts of e-Governance of the
          Government of India Directorate General of Foreign Trade (DGFT) are
          making all operations of Certificate of Origin (Non-Preferential) is
          compulsorily online w.e.f. 01.04.2022 through the authorized common
          portal coo.dgtf.gov.in. In which the exporters have to select
          Saurashtra Chamber of Commerce and Industry-Bhavnagar in the issuing
          agency while making the online application. Hence, the units doing
          export operations have to do their one-time registration on the above
          authorized common portal for issuance of Certificate of Origin
          (Non-Preferential). Exporter Registration Manual and Exporter
          Application Manual are enclosed herewith for all process information
          on registration and online application on this online portal. If you
          need any other information or guidance in this matter, you can contact
          our chamber's employee Mr. Jignesh Bhatt on the official mobile number
          of the Chamber at +91-9408 80 7980 during office hours.
        </p>
      </div>
    </>
  );
}

export default AboutCoo;
