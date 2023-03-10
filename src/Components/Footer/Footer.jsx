import React, { useEffect, useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ApiGet } from "../../Helper/API/Apidata";

export default function Footer() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await ApiGet("/contactUs/get", {
      page: 1,
      limit: 10,
    })
      .then((data) => {
        console.log("cres-", data.data.data);
        setData(data?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="position-absolute top-100 w-100">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted mt-4  bottom-0"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div> */}

          <div className="mx-auto">
            <p className="inline footer_top">
              {" "}
              <b> FOLOW US ON </b>
            </p>
            &nbsp; &nbsp; &nbsp;
            <a
              target="_blank"
              href="https://www.facebook.com/scci.bhavnagar?mibextid=ZbWKwL"
              className="me-4 text-reset"
            >
              <MDBIcon icon="facebook-f" className="text-blue-600" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/SCCIBHAVNAGAR?t=llOeBdJK8ye_fGeMKgSl0g&s=09"
              className="me-4 text-reset"
            >
              <MDBIcon icon="twitter" className="text-blue-400" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=919408807980&text&type=phone_number&app_absent=0"
              className="me-4 text-reset"
            >
              <MDBIcon icon="whatsapp" className="text-green-500" />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/saurashtrachamberof?igshid=ZDdkNTZiNTM="
              className="me-4 text-reset"
            >
              <MDBIcon icon="instagram" className="text-red-600" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/saurashtra-chamber-of-commerce-and-industry-bhavnagar-b27051184"
              className="me-4 text-reset"
            >
              <MDBIcon icon="linkedin" className="text-blue-800" />
            </a>
            <a
              target="_blank"
              href="https://youtube.com/@saurashtrachamberofcommerc2348"
              className="me-4 text-reset"
            >
              <MDBIcon icon="youtube" className="text-red-700" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center  text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="5"
                className="mx-auto p-0 mb-4 text-center"
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  SAURASHTRA CHAMBER OF COMMERCE & INDUSTRY - BHAVNAGAR
                </h6>
                <p>Unity Is Strengh</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="4" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  {data?.address}
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  <a href="mailto:scci.bhavnagar@gmail.com">{data?.email}</a>
                </p>
                <p>
                  <MDBIcon icon="calendar" className="me-3" />
                  {data?.workingHours}
                </p>
                <p className="cursor-pointer">
                  <MDBIcon icon="phone" className="me-3" />
                  <a href={"tel:02782424279"}>{data?.phone1}</a>
                </p>
                <p className="cursor-pointer">
                  <MDBIcon icon="phone" className="me-3" />
                  <a href={"tel:02782430040"}>{data?.phone2}</a>
                </p>
                <p className="cursor-pointer">
                  <MDBIcon icon="phone" className="me-3" />
                  <a href={"tel:9408807980"}>{data?.whp}</a>
                </p>
                {/* <p>
                  <MDBIcon icon="phone" className="me-3" />
                  {data?.phone2}
                </p> */}
                {/* <p>
                  <MDBIcon icon="whatsapp" className="me-3" />
                  {data?.whp}
                </p> */}
              </MDBCol>
              <MDBCol
                md="4"
                lg="3"
                xl="3"
                className="mx-auto mb-md-0 mb-4 capitalize"
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  bank details of scci
                </h6>
                <p>
                  <MDBIcon icon="bank" className="me-3" />
                  State bank of india
                </p>
                <p>
                  <MDBIcon icon="map" className="me-3" />
                  Kalanala, Bhavnagar
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}> A/C No.</span>{" "}
                  <span className="text-gray-600"> 56008013041</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>IFSC Code. </span>
                  <span className="text-gray-600">SBIN0060008</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>A/C Type. </span>
                  <span className="text-gray-600"> Saving Bank Account </span>
                </p>
                <p>
                  <a href="tel:+919408807980"></a>
                  <MDBIcon icon="phone" className="me-3" />
                  +91 9408807980
                </p>
                <p>
                  Note: After Succesfully Payment Share Details with us for
                  Confirmation
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div
          className="cursor-pointer  mx-auto text-center block mb-1 p-2"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            maxWidth: "30%",
            borderRadius: "4px",
          }}
        >
          <a
            href={data?.listOfHolidays}
            className="block"
            target="_blank"
            // download
          >
            Download List Of Holidays
          </a>
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
