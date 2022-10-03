import React from "react";
import { Link } from "react-router-dom";

function CertificateOrigin() {
  return (
    <>
      <div className="w-2/3 m-auto mt-4">
        <div>
          <h2 className="text-center text-danger">Certificate Of Origin</h2>
        </div>
        <div className="mt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At numquam
            consectetur ipsam deserunt, neque rem molestiae alias reiciendis
            placeat magni.
          </p>
          <p className="text-blue-400 hover:text-blue-900">
            <Link to="/">APPLY IN OUR DGFT SERVICE</Link>
          </p>
          <button className="btn btn-primary"> DOWNLOAD PDF</button>
        </div>
      </div>
    </>
  );
}

export default CertificateOrigin;
