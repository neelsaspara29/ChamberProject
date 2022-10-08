import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";

function CertificateOrigin() {
  return (
    <>
      <Header1 />
      <div className="w-2/3 m-auto mt-4 pub">
        <div>
          <h2 className="text-center title2 text-danger uppercase">
            Certificate Of Origin
          </h2>
        </div>
        <div className="mt-5" style={{ fontSize: "16px" }}>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            consectetur ipsam deserunt, neque rem molestiae alias reiciendis
            placeat magni.
          </p>
          <p className="text-blue-400 hover:text-blue-900 d-flex justify-content-center">
            <Link to="/">APPLY IN OUR DGFT SERVICE</Link>
          </p>
          <div className="d-flex justify-content-center">

          <button className="btn btn-primary "> DOWNLOAD PDF</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertificateOrigin;
