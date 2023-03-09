import React from "react";
// import { CheckIcon } from "@heroicons/react/outline";

import Forms from "../Utility/Form";
import pdf from "../../Helper/pdf/membership.pdf";

function Membership() {
  return (
    <>
      <article className="bg-white membership m-auto w-5/6 pub ">
        <section className=" lg:pt-10 bg-white">
          <section className="text-center">
            <h1 className="text-danger title2 uppercase"> About MemberShip</h1>
          </section>
          <section className="overview ">
            <h3 className="text-green-500 member_responsive text-center">
              <b> Overview</b>
            </h3>
            <p
              className="mt-3  mx-auto capitalize "
              style={{ textAlign: "justify" }}
            >
              Saurashtra Chembar Of Commerce and Industry is one of the most
              reputed and oldest Chamber established in 1943 i.e before
              independence having more than 1000 + Direct members and 7000 +
              indirect members from 54 different trade associations and local
              chambers . <br /> <br /> For more than <b> 79 years </b> SCCI is
              engaged in development journey of the state of Gujarat by closely
              working with the District and State Level Administration. The
              issues related to trade and industry are represented at
              appropriate level and efforts are made to get optimum result. SCCI
              also take initiative on the matter related to public grievances.
              Apart from it SCCI is fully active in circulating latest
              information, notification, developments, schemes issued by the
              Government departments to its members . Seminars ,Webinars,
              Conferences, trade show, industrial fare etc are arranged on
              regular basis.
            </p>
          </section>
          <section>
            <div className="w-100 text-center">
              <section className="why_to_sub">
                <h3 className="text-green-500 member_responsive">
                  <b> Why To Subscribe ? </b>
                </h3>
              </section>
              <ul
                className="benefit list-none d-flex flex-col justify-start p-0"
                style={{ textAlign: "justify" }}
              >
                Any organization involve in business activity can become the
                member of the Chamber and take all advantages as mentioned
                above. The details of membership is as under.
              </ul>
            </div>
            <div className="d-flex justify-center  ">
              {" "}
              <div className="btn btn-primary p-2  ">
                {" "}
                <a
                  href={pdf}
                  className="hover:text-white"
                  target="_blank"
                  download
                >
                  Download{" "}
                </a>{" "}
              </div>
            </div>
          </section>
        </section>
      </article>
    </>
  );
}

export default Membership;
