import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Header1 from "../../Components/Header/Header1";
import { ApiPost } from "../../Helper/API/Apidata";
import { FcDownload } from "react-icons/fc";

function ScciTrust() {
  const [data, setData] = useState([]);
  const [totalpage, settotalpage] = useState(0);
  const [active, setActive] = useState(1);

  const fetchData = async (page, limit) => {
    await ApiPost("/trustActivity", {
      page: page,
      limit: limit,
    })
      .then((data) => {
        console.log("res-", data.data);
        setData(data?.data?.data?.trustActivitysData);
        settotalpage(data?.data?.data?.state?.page_limit);
      })
      .catch((err) => console.log(err));
  };
  const handleChangePagination = (page) => {
    setActive(page);
    fetchData(page, 5);
  };
  useEffect(() => {
    fetchData(1, 5);
  }, []);

  return (
    <>
      <Header1 />
      <div>
        <h1 className="text-danger title2  text-center my-3 uppercase">
          saurashtra chamber trust
        </h1>
      </div>
      <div className="w-4/5 mx-auto mt-12 pub" style={{ fontSize: "16px" }}>
        <p style={{ textAlign: "justify" }}>
          Saurashtra Chamber Trust is an organization registered under the
          Trusts Act, 1950 under Trust Reg. No. F/650/Bhavnagar in operation
          since 19.12.1995. Saurashtra Chamber Trust is an affiliate of
          Saurashtra Chamber of Commerce and Industry. The main aims and
          objectives of Saurashtra Chamber Trust are as follows. To open, run or
          manage schools, colleges and hostels wherever deemed necessary for the
          overall development of the society and to provide scholarships or
          other assistance to bright and needy students, to construct clinics or
          hospitals for social well-being, to provide all kinds of medical
          facilities to the weak and financially weak people. To carry out such
          activities as may be available at a rate or free of charge, to
          establish the principles of justice and ethics in the business
          industry of the society and to collect information for the overall
          development of the business industry, to publish books, to run
          libraries, to suggest proposals or amendments in new business and
          industry laws. To support it and to promote research in business and
          commerce activities and to carry out related activities and to do
          relief work in natural calamities or man-made calamities etc.
        </p>
      </div>
      <div>
        <h1 className="text-primary title2  text-center mt-12 uppercase">
          Activities
        </h1>
        <div className="w-4/5 mx-auto  pub" style={{ fontSize: "16px" }}>
          <p style={{ textAlign: "justify" }}>
            Saurashtra Chamber Trust is continuously committed to fulfill its
            above stated aims and objectives. The organization helps the society
            in times of natural or man-made calamities, for development of
            business activities, for growth of employment. In particular, social
            and cultural activities are also carried out by the institution.
            Services provided by this organization in various fields at a
            glance..........
          </p>
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto activity_pub pub flow-root">
        {data?.map((single, idx) => {
          return (
            <div
              style={{ textAlign: (idx + 1) % 2 == 0 ? "right" : "left" }}
              class={(idx + 1) % 2 == 0 ? "city-box2" : "city-box1"}
            >
              <img src={single.photo} alt="Surat By Road" />
              {/* <h3 className="text-primary title2">Activity Name: </h3> */}
              <p className="text-gray-600 font-serif">{single.description}</p>
            </div>
          );
        })}
      </div>
      <div className="w-4/5 mt-4 mx-auto pub flow-root">
        <Pagination className="mt-2">
          {Array.from({ length: totalpage }, (_, index) => index + 1)?.map(
            (item) => (
              <Pagination.Item
                key={item}
                onClick={() => handleChangePagination(item)}
                active={item === active}
              >
                {item}
              </Pagination.Item>
            )
          )}
        </Pagination>
      </div>
      <div>
        <h1 className="text-danger title2  text-center mt-12 uppercase">
          contribution under 80g & csr
        </h1>
      </div>
      <div className="w-4/5 mt-2     mx-auto pub" style={{ fontSize: "16px" }}>
        <p className="" style={{ textAlign: "justify" }}>
          Donations to the Saurashtra Chamber Trust are tax exempted under
          Section 80G of the Income Tax Act, 1961. Saurashtra Chamber Trust also
          carries out various activities for the development of Business –
          Commerce and Social works, for which a company or an industrial house
          can contribute under CSR activities for its Company Social
          Responsibility (CSR) fund and join with us for the social, cultural
          and business activities.
        </p>
      </div>
      <div
        className=" d-flex gap-1 scci_certificate     justify-center"
        style={{ width: "95%" }}
      >
        <div>
          <h4 className="uppercase text-center text-primary">
            80g certificate
            <a href="/Assets/trutdoc/80G .jpg" download>
              {" "}
              <FcDownload
                className="inline bg-blue-200 p-1 text-3xl relative "
                style={{ top: "-2" }}
              />
            </a>
          </h4>
          <div className="p-2 m-1 border border-1">
            <img src="/Assets/trutdoc/80G .jpg" alt="" srcset="" />
          </div>
        </div>
        <div>
          <h4 className="uppercase text-center text-primary">
            csr certificate
            <a href="/Assets/trutdoc/CSR .jpg" download>
              {" "}
              <FcDownload
                className="inline bg-blue-200 p-1 text-3xl relative "
                style={{ top: "-2" }}
              />
            </a>
          </h4>
          <div className="p-2 m-1  border border-1 ">
            <img src="/Assets/trutdoc/CSR .jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ScciTrust;
