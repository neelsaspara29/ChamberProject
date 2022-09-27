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
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted mt-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
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
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Saurashtra Chambers Of Commerce Bhavnagar
              </h6>
              <p>Unity Is Strengh</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bhavnagar , Gujarat , India
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                email@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 9988523612
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 91 9875698745
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
      </div>
    </MDBFooter>
  );
}
