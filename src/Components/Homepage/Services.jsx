import React from "react";
import "../../Styles/Components/service.scss";
function Services() {
  return (
    <>
      <div className="service_facilities ">
        <div className="text-danger text-center  px-4 sm:px-6 lg:px-8 lg:pt-20 ">
          <h2> SERVICES & FACILITIES</h2>
        </div>
        <div className="d-flex w-4/5 flex-wrap m-auto justify-between mt-5">
          <div>
            <div className="text-center">
              <img
                src="/Assets/Service/certificate.svg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div
              style={{ marginTop: "6px", fontSize: "14px" }}
              className="text-green-600"
            >
              Certification Of Origin
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="/Assets/Service/visa.svg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div
              style={{ marginTop: "6px", fontSize: "14px" }}
              className="text-green-600"
            >
              Visa Recomandation
            </div>
          </div>
          <div className="text-center">
            <div>
              <img
                src="/Assets/Service/auditoriam.svg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div
              style={{ marginTop: "6px", fontSize: "14px" }}
              className="text-green-600"
            >
              Auditorium
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="/Assets/Service/conference.svg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div
              style={{ marginTop: "6px", fontSize: "14px" }}
              className="text-green-600"
            >
              Conference Hall
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
