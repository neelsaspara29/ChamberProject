import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <div className="position-absolute top-100 w-100">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted mt-5  bottom-0"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div> */}

          <div className="mx-auto">
            <a href="" className="me-4 text-reset">
              <MDBIcon icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center  text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="4"
                className="mx-auto p-0 mb-4 text-center"
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  SAURASHTRA CHAMBER OF COMMERCE & INDUSTRY - BHAVNAGAR
                </h6>
                <p>Unity Is Strengh</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  315, Sagar Complex, Near Jashonath Circle, Nakubaug, Bhavnagar
                  – 364001.
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  <a href="mailto:scci.bhavnagar@gmail.com">
                    scci.bhavnagar@gmail.com
                  </a>
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0278-2424279
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 0278-2430040
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> +91-9408 80 7980
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="cursor-pointer  mx-auto text-center mb-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            maxWidth: "30vw",
            borderRadius: "4px",
          }}
        >
          Download List Of Holidays
        </div>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
        </div>
      </MDBFooter>
    </div>
  );
}
