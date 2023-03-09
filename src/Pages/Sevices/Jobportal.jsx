import React from "react";
import { Link } from "react-router-dom";
import Header1 from "../../Components/Header/Header1";

function Jobportal() {
  return (
    <>
      <Header1 />
      <div className="w-2/3 m-auto mt-4 pub">
        <div>
          <h2 className="text-center title2 text-danger uppercase">
            PAGE UNDER CONSTRUCTION
          </h2>
        </div>
        {/* <div
          className="mt-5"
          style={{ fontSize: "16px", textAlign: "justify" }}
        >
          <p className="  ">
            Saurashtra Chamber of Commerce and Industry works to increase
            employment at Bhavnagar, stop the migration of students after
            studies and help the members of the chamber to find suitable skilled
            employees according to their business and become a bridge between
            employees and employers an attempt to give placement services. This
            effort of the Chamber will provide good employment opportunities to
            the students/skilled workers while it will be easier for the
            commercial or industrial houses to get the skilled workers as per
            their requirement. This service launched by the Chamber is totally
            free and limited to Bhavnagar City-District. Businessmen,
            Industrialists and students of Bhavnagar City & District are
            requested to take advantages from this service started by Saurashtra
            Chamber. <br />
            <br />
            <b> Note::</b>
            <br /> No student or employee will be recommended by the Chamber for
            this service and businessmen-industries will have suggested having
            to verify the candidate through face-to-face interview because the
            Saurashtra Chamber of Commerce and Industry will not be responsible
            for any kind of loss or compensation.
          </p>
          <p className="text-blue-400 hover:text-blue-900">
            <small>
              {" "}
              <Link to="/">Explore Job In Our Job Portal</Link>
            </small>
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Jobportal;
